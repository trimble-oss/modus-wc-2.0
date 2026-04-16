<script setup lang="ts">
import ModusAccordionExamples from './examples/ModusAccordionExamples.vue';
import ModusAlertExamples from './examples/ModusAlertExamples.vue';
import ModusAutocompleteExamples from './examples/ModusAutocompleteExamples.vue';
import ModusAvatarExamples from './examples/ModusAvatarExamples.vue';
import ModusBadgeExamples from './examples/ModusBadgeExamples.vue';
import ModusBreadcrumbsExamples from './examples/ModusBreadcrumbsExamples.vue';
import ModusButtonExamples from './examples/ModusButtonExamples.vue';
import ModusCardExamples from './examples/ModusCardExamples.vue';
import ModusCheckboxExamples from './examples/ModusCheckboxExamples.vue';
import ModusChipExamples from './examples/ModusChipExamples.vue';
import ModusCollapseExamples from './examples/ModusCollapseExamples.vue';
import ModusDateExamples from './examples/ModusDateExamples.vue';
import ModusDividerExamples from './examples/ModusDividerExamples.vue';
import ModusDropdownMenuExamples from './examples/ModusDropdownMenuExamples.vue';
import ModusIconExamples from './examples/ModusIconExamples.vue';
import ModusInputFeedbackExamples from './examples/ModusInputFeedbackExamples.vue';
import ModusInputLabelExamples from './examples/ModusInputLabelExamples.vue';
import ModusLoaderExamples from './examples/ModusLoaderExamples.vue';
import ModusMenuExamples from './examples/ModusMenuExamples.vue';
import ModusModalExamples from './examples/ModusModalExamples.vue';
import ModusNavbarExamples from './examples/ModusNavbarExamples.vue';
import ModusNumberInputExamples from './examples/ModusNumberInputExamples.vue';
import ModusPaginationExamples from './examples/ModusPaginationExamples.vue';
import ModusProgressExamples from './examples/ModusProgressExamples.vue';
import ModusRadioExamples from './examples/ModusRadioExamples.vue';
import ModusRatingExamples from './examples/ModusRatingExamples.vue';
import ModusSelectExamples from './examples/ModusSelectExamples.vue';
import ModusSideNavigationExamples from './examples/ModusSideNavigationExamples.vue';
import ModusSkeletonExamples from './examples/ModusSkeletonExamples.vue';
import ModusSliderExamples from './examples/ModusSliderExamples.vue';
import ModusStepperExamples from './examples/ModusStepperExamples.vue';
import ModusSwitchExamples from './examples/ModusSwitchExamples.vue';
import ModusTableExamples from './examples/ModusTableExamples.vue';
import ModusTabsExamples from './examples/ModusTabsExamples.vue';
import ModusTextInputExamples from './examples/ModusTextInputExamples.vue';
import ModusTextareaExamples from './examples/ModusTextareaExamples.vue';
import ModusThemeSwitcherExamples from './examples/ModusThemeSwitcherExamples.vue';
import ModusTimeInputExamples from './examples/ModusTimeInputExamples.vue';
import ModusToastExamples from './examples/ModusToastExamples.vue';
import ModusToolbarExamples from './examples/ModusToolbarExamples.vue';
import ModusTooltipExamples from './examples/ModusTooltipExamples.vue';
import ModusTypographyExamples from './examples/ModusTypographyExamples.vue';
import ModusLogoExamples from './examples/ModusLogoExamples.vue';
</script>

<template>
  <modus-wc-theme-provider :initial-theme="{ theme: 'modus-classic-light' }">
    <h1>Modus Vue Examples</h1>
    <div>
      <ModusLogoExamples />
      <ModusAccordionExamples />
      <ModusAlertExamples />
      <ModusAutocompleteExamples />
      <ModusAvatarExamples />
      <ModusBadgeExamples />
      <ModusBreadcrumbsExamples />
      <ModusButtonExamples />
      <ModusCardExamples />
      <ModusCheckboxExamples />
      <ModusChipExamples />
      <ModusCollapseExamples />
      <ModusDateExamples />
      <ModusDividerExamples />
      <ModusDropdownMenuExamples />
      <ModusIconExamples />
      <ModusInputFeedbackExamples />
      <ModusInputLabelExamples />
      <ModusLoaderExamples />
      <ModusMenuExamples />
      <ModusModalExamples />
      <ModusNavbarExamples />
      <ModusNumberInputExamples />
      <ModusPaginationExamples />
      <ModusProgressExamples />
      <ModusRadioExamples />
      <ModusRatingExamples />
      <ModusSelectExamples />
      <ModusSideNavigationExamples />
      <ModusSkeletonExamples />
      <ModusSliderExamples />
      <ModusStepperExamples />
      <ModusSwitchExamples />
      <ModusTableExamples />
      <ModusTabsExamples />
      <ModusTextInputExamples />
      <ModusTextareaExamples />
      <ModusThemeSwitcherExamples />
      <ModusTimeInputExamples />
      <ModusToastExamples />
      <ModusToolbarExamples />
      <ModusTooltipExamples />
      <ModusTypographyExamples />
    </div>
  </modus-wc-theme-provider>
</template>

<style>
/* Let the theme provider handle the styling */
body {
  padding: 20px;
}
</style> 