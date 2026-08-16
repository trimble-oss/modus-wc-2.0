import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { FrameworksSlide } from '../../types/slides';

interface Props {
  slide: FrameworksSlide;
  revealIndex: number;
}

export function FrameworksSlideView({ slide, revealIndex }: Props) {
  const filterActive = revealIndex >= 1;

  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="prototype-frame" aria-label="Interactive screen prototype">
        <div className="prototype-frame__chrome">
          <span />
          <span />
          <span />
          <p>Job list</p>
        </div>

        <div className="prototype-frame__body">
          <Reveal index={0} revealIndex={revealIndex} className="prototype-piece">
            <CloudBubble label="Reusable part" />
            <div className="filter-bar">
              <span className="filter-bar__chip">All</span>
              <span className={`filter-bar__chip ${filterActive ? 'filter-bar__chip--on' : ''}`}>
                High risk
              </span>
            </div>
          </Reveal>

          <Reveal index={1} revealIndex={revealIndex} className="prototype-piece">
            <CloudBubble label="Screen remembers" />
            <div className="memory-pill">Showing: High risk jobs</div>
          </Reveal>

          <Reveal index={2} revealIndex={revealIndex} className="prototype-piece prototype-piece--tap">
            <CloudBubble label="Someone taps" />
            <div className="tap-mark" aria-hidden="true">
              <span className="tap-mark__ring" />
              <span className="tap-mark__dot" />
            </div>
          </Reveal>

          <div className="job-list">
            <Reveal index={3} revealIndex={revealIndex} className="prototype-piece prototype-piece--wide">
              <CloudBubble label="Same screen updates" />
              <div className="job-list__rows">
                <div className={`job-row ${revealIndex >= 3 ? 'job-row--dim' : ''}`}>Job A</div>
                <div className={`job-row ${revealIndex >= 3 ? 'job-row--highlight' : ''}`}>Job B — delayed</div>
                <div className={`job-row ${revealIndex >= 3 ? 'job-row--dim' : ''}`}>Job C</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal index={4} revealIndex={revealIndex} className="object-wrap workshop-tool">
        <CloudBubble label="Workshop tool name" />
        <div className="react-badge">React</div>
        <p className="workshop-tool__note">You only need the name — Agent writes the code.</p>
      </Reveal>
    </SlideShell>
  );
}
