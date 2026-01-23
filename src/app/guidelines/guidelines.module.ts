import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { InputFieldsComponent } from './components/input-fields/input-fields.component';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RatingComponent } from './components/rating/rating.component';
import { SelectboxComponent } from './components/selectbox/selectbox.component';
import { SliderComponent } from './components/slider/slider.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { CardComponent } from './components/card/card.component';
import { ChartComponent } from './components/chart/chart.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './components/list/list.component';
import { BreadcrumbGuidelinesComponent } from './components/breadcrumb/breadcrumb.component';
import { TabComponent } from './components/tab/tab.component';
import { HistoryComponent } from './components/history/history.component';
import { TreeComponent } from './components/tree/tree.component';
import { MenuComponent } from './components/menu/menu.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { OverlayLoaderComponent } from './components/overlay-loader/overlay-loader.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DocumentPreviewComponent } from './components/document-preview/document-preview.component';
import { HtmlContainerComponent } from './components/html-container/html-container.component';
import { DragBoxComponent } from './components/drag-box/drag-box.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { QueryBuilderComponent } from './components/query-builder/query-builder.component';
import { CodemirrorComponent } from './components/codemirror/codemirror.component';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { ChipComponent } from './components/chip/chip.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { IconSelectBoxComponent } from './components/icon-select-box/icon-select-box.component';
import { AffixInputComponent } from './components/affix-input/affix-input.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DownloadProgressGuidelineComponent } from './components/download-progress/download-progress.component';
import { ViewSwitcherComponent } from './components/view-switcher/view-switcher.component';
import { ButtonModule } from '@enttribe/core/tools/button';
import { CheckBoxModule } from '@enttribe/core/tools/check-box';
import { ColorPickerModule } from '@enttribe/core/tools/color-picker';
import { DatePickerModule } from '@enttribe/core/tools/input-box-and-date-picker';
import { InputBoxModule } from '@enttribe/core/tools/input-box-and-date-picker';
import { RadioModule } from '@enttribe/core/tools/radio';
import { RatingStarModule } from '@enttribe/core/tools/rating-star';
import { SelectBoxModule } from '@enttribe/core/tools/select-box';
import { SliderModule } from '@enttribe/core/tools/slider';
import { ToggleModule } from '@enttribe/core/tools/toggle';
import { CardModule } from '@enttribe/core/tools/card';
import { ChartModule } from '@enttribe/core/chart';
import { GxAgGridModule } from '@enttribe/core/grid';
import { ListModule } from '@enttribe/core/tools/list';
import { BreadcrumbsModule } from '@enttribe/core/tools/breadcrumbs';
import { TabsModule } from '@enttribe/core/tools/tabs';
import { HistoryModule } from '@enttribe/core/tools/history';
import { TreeModule } from '@enttribe/core/tools/tree';
import { MenuModule } from '@enttribe/core/tools/menu';
import { StepperModule } from '@enttribe/core/tools/stepper';
import { GenericModalModule } from '@enttribe/core/tools/generic-modal';
import { ProgressBarModule } from '@enttribe/core/tools';
import { SnackbarModule } from '@enttribe/core/tools/snackbar';
import { TooltipModule } from '@enttribe/core/tools/tooltip';
import { LoaderModule } from '@enttribe/core/tools/loader';
import { UploadBoxModule } from '@enttribe/core/tools/upload-box';
import { LayoutModule } from '@enttribe/core/layout';
import { ImageViewerModule } from '@enttribe/core/tools/image-viewer';
import { HtmlContainerModule } from '@enttribe/core/tools/html-container';
import { DragDropBoxComponentModule } from '@enttribe/core/tools/drag-drop-box';
import { DividerModule } from '@enttribe/core/tools/divider';
import { IconModule } from '@enttribe/core/tools/icon';
import { LabelModule } from '@enttribe/core/tools/label';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ToolsCoreModule } from '@enttribe/core/tools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AdvanceSearchModule } from '@enttribe/core/tools/advance-search';
import { QueryBuilderModule } from '@enttribe/core/query-builder';
import { CodemirrorModule } from '@enttribe/core/tools/codemirror';
import { QuillEditorModule } from '@enttribe/core/tools/quill-editor';
import { TextEditorModule } from '@enttribe/core/text-editor';
import { ChipModule } from '@enttribe/core/tools/chip';
import { ExpansionPanelModule } from '@enttribe/core/tools/expansion-panel';
import { AutoCompleteModule } from '@enttribe/core/tools/auto-complete';
import { IconSelectBoxModule } from '@enttribe/core/tools/icon-select-box';
import { AffixInputModule } from '@enttribe/core/tools/affix-input';
import { SearchBoxModule } from '@enttribe/core/tools/search-box';
import { DownloadProgressModule } from '@enttribe/core/tools/download-progress';
import { AngularCalendarComponent } from './components/angular-calendar/angular-calendar.component';
import { AnnotationToolComponent } from './components/annotation-tool/annotation-tool.component';
import { CalendarGuidelineComponent } from './components/calendar/calendar.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { DynamicSelectComponent } from './components/dynamic-select/dynamic-select.component';
import { ErrorPagesComponent } from './components/error-pages/error-pages.component';
import { GlobalSettingGuidelineComponent } from './components/global-setting/global-setting.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { ImageViewerGuidelineComponent } from './components/image-viewer/image-viewer.component';
import { InputWithInfoComponent } from './components/input-with-info/input-with-info.component';
import { LabsComponent } from './components/labs/labs.component';
import { CalendarModule } from '@enttribe/core/tools/calendar';
import { ImageAnnotationModule } from '@enttribe/core/tools/image-annotation';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { GxErrorModule } from '@enttribe/core/tools/gx-error';
import { GlobalSettingModule } from '@enttribe/core/global-setting';
import { EmbededIframeModule } from '@enttribe/core';

@NgModule({
  declarations: [
    GuidelinesComponent,
    OverviewComponent,
    TypographyComponent,
    ButtonComponent,
    CheckboxComponent,
    ColorPickerComponent,
    DatePickerComponent,
    InputFieldsComponent,
    InlineEditComponent,
    RadioButtonComponent,
    RatingComponent,
    SelectboxComponent,
    SliderComponent,
    ToggleComponent,
    CardComponent,
    ChartComponent,
    GridComponent,
    ListComponent,
    BreadcrumbGuidelinesComponent,
    TabComponent,
    HistoryComponent,
    TreeComponent,
    MenuComponent,
    StepperComponent,
    DialogComponent,
    ProgressBarComponent,
    SnackbarComponent,
    TooltipComponent,
    OverlayLoaderComponent,
    UploaderComponent,
    PageHeaderComponent,
    DocumentPreviewComponent,
    HtmlContainerComponent,
    DragBoxComponent,
    DummyComponent,
    ColorPaletteComponent,
    AdvanceSearchComponent,
    QueryBuilderComponent,
    CodemirrorComponent,
    QuillEditorComponent,
    TextEditorComponent,
    ChipComponent,
    ExpansionPanelComponent,
    AutoCompleteComponent,
    CurrencyInputComponent,
    IconSelectBoxComponent,
    AffixInputComponent,
    SearchboxComponent,
    TimelineComponent,
    DownloadProgressGuidelineComponent,
    ViewSwitcherComponent,
    AngularCalendarComponent,
    AnnotationToolComponent,
    CalendarGuidelineComponent,
    CarouselSliderComponent,
    DynamicSelectComponent,
    ErrorPagesComponent,
    GlobalSettingGuidelineComponent,
    IframeComponent,
    ImageViewerGuidelineComponent,
    InputWithInfoComponent,
    LabsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    GuidelinesRoutingModule,
    ButtonModule,
    CheckBoxModule,
    ColorPickerModule,
    DatePickerModule,
    InputBoxModule,
    RadioModule,
    RatingStarModule,
    SelectBoxModule,
    SliderModule,
    ToggleModule,
    CardModule,
    ChartModule,
    GxAgGridModule,
    ListModule,
    BreadcrumbsModule,
    TabsModule,
    HistoryModule,
    TreeModule,
    MenuModule,
    StepperModule,
    GenericModalModule,
    ProgressBarModule,
    SnackbarModule,
    TooltipModule,
    LoaderModule,
    UploadBoxModule,
    LayoutModule,
    ImageViewerModule,
    HtmlContainerModule,
    DragDropBoxComponentModule,
    DividerModule,
    IconModule,
    LabelModule,
    ClipboardModule,
    ToolsCoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    AdvanceSearchModule,
    QueryBuilderModule,
    CodemirrorModule,
    QuillEditorModule,
    TextEditorModule,
    ChipModule,
    ExpansionPanelModule,
    AutoCompleteModule,
    IconSelectBoxModule,
    AffixInputModule,
    SearchBoxModule,
    DownloadProgressModule,
    CalendarModule,
    ImageAnnotationModule,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    GxErrorModule,
    GlobalSettingModule,
    EmbededIframeModule,
  ],
})
export class GuidelinesModule {}
