import { Component, OnInit, ViewChild, TemplateRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';
import { PblDataSource, columnFactory, createDS } from '@pebula/ngrid';

import { ViewMediafile } from 'app/site/mediafiles/models/view-mediafile';
import { MediafileRepositoryService } from 'app/core/repositories/mediafiles/mediafile-repository.service';
import { MediaManageService } from 'app/core/ui-services/media-manage.service';
import { MediafilesSortListService } from '../../services/mediafiles-sort-list.service';
import { OperatorService } from 'app/core/core-services/operator.service';
import { PromptService } from 'app/core/ui-services/prompt.service';
import { ViewportService } from 'app/core/ui-services/viewport.service';
import { Mediafile } from 'app/shared/models/mediafiles/mediafile';
import { ViewGroup } from 'app/site/users/models/view-group';
import { GroupRepositoryService } from 'app/core/repositories/users/group-repository.service';
import { BaseViewComponent } from 'app/site/base/base-view';

/**
 * Lists all the uploaded files.
 */
@Component({
    selector: 'os-mediafile-list',
    templateUrl: './mediafile-list.component.html',
    styleUrls: ['./mediafile-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MediafileListComponent extends BaseViewComponent implements OnInit, OnDestroy {
    /**
     * Data source for the files
     */
    public dataSource: PblDataSource<ViewMediafile>;

    /**
     * Holds the actions for logos. Updated via an observable
     */
    public logoActions: string[];

    /**
     * Holds the actions for fonts. Update via an observable
     */
    public fontActions: string[];

    /**
     * Holds the file to edit
     */
    public fileToEdit: ViewMediafile;

    public newDirectoryForm: FormGroup;
    public moveForm: FormGroup;
    public directoryBehaviorSubject: BehaviorSubject<ViewMediafile[]>;
    public groupsBehaviorSubject: BehaviorSubject<ViewGroup[]>;

    /**
     * @returns true if the user can manage media files
     */
    public get canUploadFiles(): boolean {
        return this.operator.hasPerms('mediafiles.can_see') && this.operator.hasPerms('mediafiles.can_upload');
    }

    /**
     * @return true if the user can manage media files
     */
    public get canEdit(): boolean {
        return this.operator.hasPerms('mediafiles.can_manage');
    }

    /**
     * The form to edit Files
     */
    @ViewChild('fileEditForm', { static: true })
    public fileEditForm: FormGroup;

    /**
     * Reference to the template
     */
    @ViewChild('fileEditDialog', { static: true })
    public fileEditDialog: TemplateRef<string>;

    /**
     * Create the column set
     */
    public columnSet = columnFactory()
        .table(
            {
                prop: 'icon',
                label: '',
                width: '40px'
            },
            {
                prop: 'title',
                label: this.translate.instant('Title'),
                width: 'auto',
                minWidth: 60
            },
            {
                prop: 'info',
                label: this.translate.instant('Info'),
                width: '20%',
                minWidth: 60
            },
            {
                prop: 'indicator',
                label: '',
                width: '40px'
            },
            {
                prop: 'menu',
                label: '',
                width: '40px'
            }
        )
        .build();

    public isMultiselect = false; // TODO
    private folderSubscription: Subscription;
    private directorySubscription: Subscription;
    public directory: ViewMediafile | null;
    public directoryChain: ViewMediafile[];

    /**
     * Constructs the component
     *
     * @param titleService sets the browser title
     * @param translate translation for the parent
     * @param matSnackBar showing errors and sucsess messages
     * @param router angulars router
     * @param route anduglars ActivatedRoute
     * @param repo the repository for mediafiles
     * @param mediaManage service to manage media files (setting images as logos)
     * @param promptService prevent deletion by accident
     * @param vp viewport Service to check screen size
     * @param fitlerService MediaFileFilterService for advanced filtering
     * @param sortService MediaFileSortService sort for advanced sorting
     * @param operator permission check
     */
    public constructor(
        titleService: Title,
        protected translate: TranslateService,
        matSnackBar: MatSnackBar,
        private route: ActivatedRoute,
        private router: Router,
        public repo: MediafileRepositoryService,
        private mediaManage: MediaManageService,
        private promptService: PromptService,
        public vp: ViewportService,
        public sortService: MediafilesSortListService,
        private operator: OperatorService,
        private dialog: MatDialog,
        private fb: FormBuilder,
        private formBuilder: FormBuilder,
        private groupRepo: GroupRepositoryService
    ) {
        super(titleService, translate, matSnackBar);

        this.newDirectoryForm = this.formBuilder.group({
            title: ['', Validators.required],
            access_groups_id: []
        });
        this.moveForm = this.formBuilder.group({
            directory_id: []
        });
        this.directoryBehaviorSubject = this.repo.getDirectoryBehaviorSubject();
        this.groupsBehaviorSubject = this.groupRepo.getViewModelListBehaviorSubject();
    }

    /**
     * Init.
     * Set the title, make the edit Form and observe Mediafiles
     */
    public ngOnInit(): void {
        super.setTitle('Files');

        this.repo.getDirectoryIdByPath(this.route.snapshot.url.map(x => x.path)).then(directoryId => {
            this.changeDirectory(directoryId);
        });

        // Observe the logo actions
        this.mediaManage.getLogoActions().subscribe(action => {
            this.logoActions = action;
        });

        // Observe the font actions
        this.mediaManage.getFontActions().subscribe(action => {
            this.fontActions = action;
        });
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        this.clearSubscriptions();
    }

    public getDateFromTimestamp(timestamp: string): string {
        return new Date(timestamp).toLocaleString(this.translate.currentLang);
    }

    public changeDirectory(directoryId: number | null): void {
        this.clearSubscriptions();

        this.folderSubscription = this.repo.getListObservableDirectory(directoryId).subscribe(mediafiles => {
            if (mediafiles) {
                this.dataSource = createDS<ViewMediafile>()
                    .onTrigger(() => mediafiles)
                    .create();
            }
        });

        if (directoryId) {
            this.directorySubscription = this.repo.getViewModelObservable(directoryId).subscribe(d => {
                this.directory = d;
                if (d) {
                    this.directoryChain = d.getDirectoryChain();
                    // Update the URL.
                    this.router.navigate(['/mediafiles/files/' + d.path], {
                        replaceUrl: true
                    });
                } else {
                    this.directoryChain = [];
                    this.router.navigate(['/mediafiles/files/'], {
                        replaceUrl: true
                    });
                }
            });
        } else {
            this.directory = null;
            this.directoryChain = [];
            this.router.navigate(['/mediafiles/files/'], {
                replaceUrl: true
            });
        }
    }

    /**
     */
    public onMainEvent(): void {
        const path = '/mediafiles/upload/' + (this.directory ? this.directory.path : '');
        this.router.navigate([path]);
    }

    /**
     * Click on the edit button in the file menu
     *
     * @param file the selected file
     */
    public onEditFile(file: ViewMediafile): void {
        this.fileToEdit = file;

        this.fileEditForm = this.fb.group({
            title: [file.title, Validators.required],
            access_groups_id: [file.access_groups_id]
        });

        const dialogRef = this.dialog.open(this.fileEditDialog, {
            width: '400px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            disableClose: true
        });

        dialogRef.keydownEvents().subscribe((event: KeyboardEvent) => {
            if (event.key === 'Enter' && event.shiftKey && this.fileEditForm.valid) {
                this.onSaveEditedFile(this.fileEditForm.value);
            }
        });
    }

    /**
     * Click on the save button in edit mode
     */
    public onSaveEditedFile(value: Partial<Mediafile>): void {
        this.repo.update(value, this.fileToEdit).then(() => {
            this.dialog.closeAll();
        }, this.raiseError);
    }

    /**
     * Sends a delete request to the repository.
     *
     * @param file the file to delete
     */
    public async onDelete(file: ViewMediafile): Promise<void> {
        const title = this.translate.instant('Are you sure you want to delete this file?');
        const content = file.getTitle();
        if (await this.promptService.open(title, content)) {
            this.repo.delete(file);
        }
    }

    /**
     * Returns the display name of an action
     *
     * @param mediaFileAction Logo or font action
     * @returns the display name of the selected action
     */
    public getNameOfAction(mediaFileAction: string): string {
        return this.translate.instant(this.mediaManage.getMediaConfig(mediaFileAction).display_name);
    }

    /**
     * Returns a formated string for the tooltip containing all the action names.
     *
     * @param file the target file where the tooltip should be shown
     * @returns getNameOfAction with formated strings.
     */
    public formatIndicatorTooltip(file: ViewMediafile): string {
        const settings = this.getFileSettings(file);
        const actionNames = settings.map(option => this.getNameOfAction(option));
        return actionNames.join('\n');
    }

    /**
     * Checks if the given file is used in the following action
     * i.e checks if a image is used as projector logo
     *
     * @param mediaFileAction the action to check for
     * @param media the mediafile to check
     * @returns whether the file is used
     */
    public isUsedAs(file: ViewMediafile, mediaFileAction: string): boolean {
        const config = this.mediaManage.getMediaConfig(mediaFileAction);
        return config ? config.path === file.url : false;
    }

    /**
     * Look up the managed options for the given file
     *
     * @param file the file to look up
     * @returns array of actions
     */
    public getFileSettings(file: ViewMediafile): string[] {
        let uses = [];
        if (file) {
            if (file.isFont()) {
                uses = this.fontActions.filter(action => this.isUsedAs(file, action));
            } else if (file.isImage()) {
                uses = this.logoActions.filter(action => this.isUsedAs(file, action));
            }
        }
        return uses;
    }

    /**
     * Set the given image as the given option
     *
     * @param event The fired event after clicking the button
     * @param file the selected file
     * @param action the action that should be executed
     */
    public onManageButton(event: any, file: ViewMediafile, action: string): void {
        // prohibits automatic closing
        event.stopPropagation();
        this.mediaManage.setAs(file, action);
    }

    public createNewFolder(templateRef: TemplateRef<string>): void {
        this.newDirectoryForm.reset();
        const dialogRef = this.dialog.open(templateRef, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const mediafile = new Mediafile({
                    ...this.newDirectoryForm.value,
                    parent_id: this.directory ? this.directory.id : null,
                    is_directory: true
                });
                this.repo.create(mediafile).then(null, this.raiseError);
            }
        });
    }

    public move(templateRef: TemplateRef<string>, mediafile: ViewMediafile): void {
        this.newDirectoryForm.reset();
        const dialogRef = this.dialog.open(templateRef, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.repo.move([mediafile], this.moveForm.value.directory_id).then(null, this.raiseError);
            }
        });
    }

    private clearSubscriptions(): void {
        if (this.folderSubscription) {
            this.folderSubscription.unsubscribe();
            this.folderSubscription = null;
        }
        if (this.directorySubscription) {
            this.directorySubscription.unsubscribe();
            this.directorySubscription = null;
        }
    }
}
