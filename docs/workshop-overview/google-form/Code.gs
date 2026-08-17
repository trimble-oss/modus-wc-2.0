/**
 * Designing with Agent — workshop assessments & feedback
 *
 * Creates a Google Form. Does not change the slide deck.
 *
 * How to run:
 * 1. Go to https://script.google.com
 * 2. New project → paste this file
 * 3. Run createWorkshopForm
 * 4. Authorize when asked
 * 5. View → Logs for the Form URL (edit + respond)
 */
function createWorkshopForm() {
  const form = FormApp.create('Designing with Agent — assessments & feedback');

  form.setDescription(
    'Submit each phase assessment (Google Drive link + a short note). ' +
      'Assessment 1 and Assessment 5 are required. Assessments 2–4 are optional. ' +
      'For Assessment 5 you may submit a GitHub repo URL instead of Drive. ' +
      'Then rate four statements and answer one open question.',
  );
  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);

  const drivePattern = '.*(drive\\.google\\.com|docs\\.google\\.com).*';
  const driveOrRepoPattern = '.*(drive\\.google\\.com|docs\\.google\\.com|github\\.com).*';

  form.addSectionHeaderItem().setTitle('Your name').setHelpText('So we can match submissions to the workshop session.');
  form.addTextItem().setTitle('Name').setRequired(true);

  addAssessment_(form, {
    number: 1,
    title: 'Assessment 1 — Basic web page',
    help:
      'Create a basic web page in your workshop folder and ask Agent to open it. Success: you can see it running without opening the terminal yourself.',
    required: true,
    linkHelp: 'Paste a Google Drive link to your page, folder, or recording.',
    urlPattern: drivePattern,
    urlError: 'Use a Google Drive or Google Docs link.',
  });

  addAssessment_(form, {
    number: 2,
    title: 'Assessment 2 — Same screen, smarter update',
    help:
      'Ask Agent to build an app where one choice changes what you see on the same screen. Success: the screen updates without starting over on a new page.',
    required: false,
    linkHelp: 'Optional. Google Drive link to the app, folder, or recording.',
    urlPattern: drivePattern,
    urlError: 'Use a Google Drive or Google Docs link.',
  });

  addAssessment_(form, {
    number: 3,
    title: 'Assessment 3 — Connect context and build',
    help:
      'Connect workshop context (rules / skills / MCP) and create an app in your workspace folder. Success: it runs locally and is not a generic one-off UI.',
    required: false,
    linkHelp: 'Optional. Google Drive link to the app, folder, or recording.',
    urlPattern: drivePattern,
    urlError: 'Use a Google Drive or Google Docs link.',
  });

  addAssessment_(form, {
    number: 4,
    title: 'Assessment 4 — Build with Modus',
    help:
      'Rebuild or extend your app using Modus components and Modus AI resources. Success: the UI uses Modus building blocks and works in the browser.',
    required: false,
    linkHelp: 'Optional. Google Drive link to the app, folder, or recording.',
    urlPattern: drivePattern,
    urlError: 'Use a Google Drive or Google Docs link.',
  });

  addAssessment_(form, {
    number: 5,
    title: 'Assessment 5 — Shareable repo or preview',
    help:
      'Publish the repository and provide what others need to try it. Success: a non-builder can open the repo and try the app locally or via preview.',
    required: true,
    linkHelp: 'Required. GitHub repo URL preferred. Google Drive is OK if you do not have a repo yet.',
    urlPattern: driveOrRepoPattern,
    urlError: 'Use a GitHub repo URL or a Google Drive link.',
  });

  form.addPageBreakItem().setTitle('Feedback').setHelpText('Four ratings (1–5) and one written answer. All required.');

  const ratingLabels = [
    'I could build a working prototype without writing code myself.',
    'A structured prompt (goal, audience, context, requirements, success) improved my results.',
    'I know when to start from Modus instead of accepting generic UI.',
    'I can share this work so product and engineering can try it.',
  ];

  ratingLabels.forEach(function (label, index) {
    form
      .addScaleItem()
      .setTitle('Rating ' + (index + 1) + ' — ' + label)
      .setBounds(1, 5)
      .setLabels('Strongly disagree', 'Strongly agree')
      .setRequired(true);
  });

  form
    .addParagraphTextItem()
    .setTitle('What will you try differently on your next real project, and what still feels hard?')
    .setHelpText('This is the main written question. A few sentences is enough.')
    .setRequired(true);

  const editUrl = form.getEditUrl();
  const publishedUrl = form.getPublishedUrl();
  Logger.log('Edit: ' + editUrl);
  Logger.log('Respond: ' + publishedUrl);

  return { editUrl: editUrl, publishedUrl: publishedUrl };
}

function addAssessment_(form, spec) {
  form.addPageBreakItem().setTitle(spec.title).setHelpText(spec.help + (spec.required ? ' Required.' : ' Optional.'));

  const link = form
    .addTextItem()
    .setTitle('Assessment ' + spec.number + ' — Link')
    .setHelpText(spec.linkHelp)
    .setRequired(spec.required);

  link.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern(spec.urlPattern)
      .setHelpText(spec.urlError)
      .build(),
  );

  form
    .addParagraphTextItem()
    .setTitle('Assessment ' + spec.number + ' — What should we look at?')
    .setHelpText('What you asked Agent to do, and what to open first.')
    .setRequired(spec.required);
}
