import { ModusWcIcon as ModusIcon } from '@trimble-cms/modus-wc-react';

export default function ModusBadgeExamples() {
  return (
    <>
      <style>
        {`
          .icon-blue {
            color: var(--modus-wc-color-trimble-blue);
          }
          .icon-red {
            color: var(--modus-wc-color-red);
          }
        `}
      </style>
      <h3>Icon</h3>
      <div className="grid">
        <div className="grid-row">
            <ModusIcon aria-label='Alert icon' name='alert' />
            <ModusIcon aria-label='Accessible' name='accessibility_circle' />
        </div>
        <div className="grid-row">
          Small <ModusIcon aria-label='Alert icon' name='alert' size='sm' />
          Medium <ModusIcon aria-label='Alert icon' name='alert' size='md' />
          Large <ModusIcon aria-label='Alert icon' name='alert' size='lg' />
        </div>
        <div className="grid-row">
            <ModusIcon name='file_new' decorative />
            <ModusIcon name='file_type_pdf' decorative />
        </div>
        <div className="grid-row">
            <ModusIcon name='add_bold' decorative className='icon-blue' />
            <ModusIcon name='add_bold' decorative className='icon-red' />
        </div>
      </div>
    </>
  );
}