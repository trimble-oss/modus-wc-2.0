/**
 * Designing with Agent — workshop submissions & feedback
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
  const form = FormApp.create('Designing with Agent — Day 1 & Day 2 submissions');

  form.setDescription(
    'Upload a Day 1 screenshot, a Day 2 screenshot, and one GitHub or hosting URL. ' +
      'Then rate four workshop statements and answer one open question. All fields are required.',
  );
  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);

  const urlPattern = '.*(github\\.com|github\\.io|vercel\\.app|netlify\\.app|https?://).*';

  form.addSectionHeaderItem().setTitle('About you').setHelpText('So we can match your submission to the workshop session.');
  form.addTextItem().setTitle('Name').setRequired(true);

  form
    .addPageBreakItem()
    .setTitle('Workshop submissions')
    .setHelpText('Three items: Day 1 screenshot, Day 2 screenshot, and one link for Git or hosting.');

  form
    .addFileUploadItem()
    .setTitle('Day 1 screenshot')
    .setHelpText(
      'Upload a screenshot of your running page from Day 1. ' +
        'You asked Agent to build it and open it — no terminal required.',
    )
    .setRequired(true);

  form
    .addFileUploadItem()
    .setTitle('Day 2 screenshot')
    .setHelpText(
      'Upload a screenshot of your Day 2 build — for example an interactive screen, Modus UI, or connected context.',
    )
    .setRequired(true);

  const hostingLink = form
    .addTextItem()
    .setTitle('Git and hosting URL')
    .setHelpText('Paste your GitHub repo URL or a live preview URL (GitHub Pages, Vercel, Netlify, etc.). One link is enough.')
    .setRequired(true);

  hostingLink.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern(urlPattern)
      .setHelpText('Use a GitHub repo URL or a hosted preview URL starting with http:// or https://.')
      .build(),
  );

  form.addPageBreakItem().setTitle('Feedback').setHelpText('Four ratings (1–5) and one written answer. All required.');

  const ratingLabels = [
    'I can start in Agent and get a page open without using the terminal.',
    'I can brief Agent so a choice updates the same screen instead of a full refresh.',
    'I can use rules, skills, MCP, or Modus so Agent is not guessing.',
    'I can share a GitHub repo or hosted URL so others can try the work.',
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
    .setTitle('After this workshop, what will you try on a real product — and what still feels hard?')
    .setHelpText('This is the main written question. A few sentences is enough.')
    .setRequired(true);

  const editUrl = form.getEditUrl();
  const publishedUrl = form.getPublishedUrl();
  Logger.log('Edit: ' + editUrl);
  Logger.log('Respond: ' + publishedUrl);

  return { editUrl: editUrl, publishedUrl: publishedUrl };
}
