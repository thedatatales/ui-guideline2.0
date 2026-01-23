import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: GuidelinesComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'color-palette', component: ColorPaletteComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'color-picker', component: ColorPickerComponent },
      { path: 'date-picker', component: DatePickerComponent },
      { path: 'input-fields', component: InputFieldsComponent },
      { path: 'inline-edit', component: InlineEditComponent },
      { path: 'radio-button', component: RadioButtonComponent },
      { path: 'rating', component: RatingComponent },
      { path: 'selectbox', component: SelectboxComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'toggle', component: ToggleComponent },
      { path: 'card', component: CardComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'grid', component: GridComponent },
      { path: 'list', component: ListComponent },
      { path: 'breadcrumb', component: BreadcrumbGuidelinesComponent },
      { path: 'tab', component: TabComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'progress-bar', component: ProgressBarComponent },
      { path: 'snackbar', component: SnackbarComponent },
      { path: 'tooltip', component: TooltipComponent },
      { path: 'overlay-loader', component: OverlayLoaderComponent },
      { path: 'uploader', component: UploaderComponent },
      { path: 'page-header', component: PageHeaderComponent },
      { path: 'document-preview', component: DocumentPreviewComponent },
      { path: 'html-container', component: HtmlContainerComponent },
      { path: 'drag-box', component: DragBoxComponent },
      { path: 'dummy', component: DummyComponent },
      { path: 'advance-search', component: AdvanceSearchComponent },
      { path: 'query-builder', component: QueryBuilderComponent },
      { path: 'codemirror', component: CodemirrorComponent },
      { path: 'quill-editor', component: QuillEditorComponent },
      { path: 'text-editor', component: TextEditorComponent },
      { path: 'chip', component: ChipComponent },
      { path: 'expansion-panel', component: ExpansionPanelComponent },
      { path: 'auto-complete', component: AutoCompleteComponent },
      { path: 'currency-input', component: CurrencyInputComponent },
      { path: 'icon-select-box', component: IconSelectBoxComponent },
      { path: 'affix-input', component: AffixInputComponent },
      { path: 'searchbox', component: SearchboxComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'download-progress', component: DownloadProgressGuidelineComponent },
      { path: 'view-switcher', component: ViewSwitcherComponent },
      { path: 'angular-calendar', component: AngularCalendarComponent },
      { path: 'annotation-tool', component: AnnotationToolComponent },
      { path: 'calendar', component: CalendarGuidelineComponent },
      { path: 'carousel-slider', component: CarouselSliderComponent },
      { path: 'dynamic-select', component: DynamicSelectComponent },
      { path: 'error-pages', component: ErrorPagesComponent },
      { path: 'global-setting', component: GlobalSettingGuidelineComponent },
      { path: 'iframe', component: IframeComponent },
      { path: 'image-viewer', component: ImageViewerGuidelineComponent },
      { path: 'input-with-info', component: InputWithInfoComponent },
      { path: 'labs', component: LabsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidelinesRoutingModule {}
