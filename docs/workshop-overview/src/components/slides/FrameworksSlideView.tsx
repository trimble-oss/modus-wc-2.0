import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { FrameworksSlide } from '../../types/slides';

interface Props {
  slide: FrameworksSlide;
  revealIndex: number;
}

function JobScreen({
  variant,
  filterOn,
  listUpdated,
  refreshing,
  showTap,
}: {
  variant: 'before' | 'after';
  filterOn: boolean;
  listUpdated: boolean;
  refreshing: boolean;
  showTap: boolean;
}) {
  return (
    <div className={`mini-screen mini-screen--${variant}`}>
      <div className="mini-screen__chrome">
        <span />
        <span />
        <span />
        <p>Job list</p>
      </div>
      <div className="mini-screen__body">
        <div className="filter-bar">
          <span className="filter-bar__chip">All</span>
          <span className={`filter-bar__chip ${filterOn ? 'filter-bar__chip--on' : ''}`}>High risk</span>
        </div>

        {variant === 'after' && filterOn ? <div className="memory-pill">High risk selected</div> : null}

        <div className="job-list__rows">
          <div className={`job-row ${listUpdated ? 'job-row--dim' : ''}`}>Job A</div>
          <div className={`job-row ${listUpdated ? 'job-row--highlight' : ''}`}>Job B — delayed</div>
          <div className={`job-row ${listUpdated ? 'job-row--dim' : ''}`}>Job C</div>
        </div>

        {showTap ? (
          <div className="tap-mark tap-mark--on-chip" aria-hidden="true">
            <span className="tap-mark__ring" />
            <span className="tap-mark__dot" />
          </div>
        ) : null}

        {refreshing ? (
          <div className="reload-flash" aria-hidden="true">
            <span className="reload-flash__icon">↻</span>
            <span className="reload-flash__label">Everything reloads</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function FrameworksSlideView({ slide, revealIndex }: Props) {
  const showTap = revealIndex >= 1;
  const beforeRefresh = revealIndex >= 2;
  const afterStored = revealIndex >= 3;
  const afterUpdated = revealIndex >= 4;

  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="compare-panels">
        <div className="compare-panels__col">
          <p className="compare-panels__heading">Before — HTML &amp; CSS</p>

          <Reveal index={0} revealIndex={revealIndex} className="compare-panels__panel">
            <JobScreen
              variant="before"
              filterOn={false}
              listUpdated={false}
              refreshing={beforeRefresh}
              showTap={showTap}
            />
          </Reveal>

          {showTap ? (
            <Reveal index={1} revealIndex={revealIndex}>
              <CloudBubble label="Action" />
            </Reveal>
          ) : null}

          {beforeRefresh ? (
            <Reveal index={2} revealIndex={revealIndex}>
              <CloudBubble label="Whole page refreshes" />
            </Reveal>
          ) : null}
        </div>

        <div className="compare-panels__col">
          <p className="compare-panels__heading">With a framework</p>
          <p className="compare-panels__tagline">Same screen, smarter update</p>

          <Reveal index={0} revealIndex={revealIndex} className="compare-panels__panel">
            <JobScreen
              variant="after"
              filterOn={afterStored}
              listUpdated={afterUpdated}
              refreshing={false}
              showTap={showTap}
            />
          </Reveal>

          {showTap ? (
            <Reveal index={1} revealIndex={revealIndex}>
              <CloudBubble label="Action" />
            </Reveal>
          ) : null}

          {afterStored && !afterUpdated ? (
            <Reveal index={3} revealIndex={revealIndex}>
              <CloudBubble label="Choice is stored" />
            </Reveal>
          ) : null}

          {afterUpdated && revealIndex === 4 ? (
            <Reveal index={4} revealIndex={revealIndex}>
              <CloudBubble label="Only the list updates" />
            </Reveal>
          ) : null}

          <Reveal index={5} revealIndex={revealIndex} className="framework-foot">
            <CloudBubble label="Framework" />
            <div className="react-badge">React</div>
            <p className="workshop-tool__note">You only need the name — Agent writes the code.</p>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}
