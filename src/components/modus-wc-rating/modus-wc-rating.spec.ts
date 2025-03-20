import { newSpecPage } from '@stencil/core/testing';
import { ModusWcRating } from './modus-wc-rating';

describe('modus-wc-rating', () => {
  // Basic rendering tests
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: '<modus-wc-rating aria-label="default rating"></modus-wc-rating>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: `<modus-wc-rating
        aria-label="custom rating"
        allow-half="true"
        count="7"
        custom-class="test-custom-class"
        disabled="true"
        size="lg"
        variant="heart"
        value="3.5"
      ></modus-wc-rating>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  // // Variant tests
  it('should render star variant correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: `<modus-wc-rating
        aria-label="star rating"
        variant="star"
      ></modus-wc-rating>`,
    });
    expect(page.root).toMatchSnapshot();

    const ratingItems = page.root!.querySelectorAll('.modus-wc-mask-star-2');
    expect(ratingItems.length).toBe(5); // Default count is 5
  });

  it('should render heart variant correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: `<modus-wc-rating
        aria-label="heart rating"
        variant="heart"
      ></modus-wc-rating>`,
    });
    expect(page.root).toMatchSnapshot();

    const ratingItems = page.root!.querySelectorAll('.modus-wc-mask-heart');
    expect(ratingItems.length).toBe(5); // Default count is 5
  });

  it('should render smiley variant correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: `<modus-wc-rating
        aria-label="smiley rating"
        variant="smiley"
      ></modus-wc-rating>`,
    });
    expect(page.root).toMatchSnapshot();

    const ratingItems = page.root!.querySelectorAll('.modus-wc-mask-smiley');
    expect(ratingItems.length).toBe(5); // Default count is 5
  });

  it('should render thumb variant correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: `<modus-wc-rating
        aria-label="thumb rating"
        variant="thumb"
      ></modus-wc-rating>`,
    });
    expect(page.root).toMatchSnapshot();

    const ratingItems = page.root!.querySelectorAll('.modus-wc-mask-thumb');
    expect(ratingItems.length).toBe(2); // Thumb variant has 2 options
  });

  // // Event tests
  it('should emit ratingChange event when selecting a new rating', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: `<modus-wc-rating
        aria-label="rating test"
        count="5"
        value="2"
      ></modus-wc-rating>`,
    });

    // eslint-disable-next-line no-undef
    const rating = page.root as HTMLModusWcRatingElement;
    const ratingChangeSpy = jest.fn();
    rating.addEventListener('ratingChange', ratingChangeSpy);

    const ratingItems = page.root!.querySelectorAll('input');
    // First item is the zero/reset option, then we have the actual rating items
    // Select the 4th rating (index 4)
    const fourthRatingItem = ratingItems[4];

    fourthRatingItem.dispatchEvent(new Event('change', { bubbles: true }));
    await page.waitForChanges();

    expect(ratingChangeSpy).toHaveBeenCalled();
    const eventDetail = ratingChangeSpy.mock.calls[0][0].detail;
    expect(eventDetail.newRating).toBe(4);
  });

  it('should reset rating to zero when selecting the zero option', async () => {
    const page = await newSpecPage({
      components: [ModusWcRating],
      html: `<modus-wc-rating
        aria-label="rating test"
        count="5"
        value="3"
      ></modus-wc-rating>`,
    });

    const ratingItems = page.root!.querySelectorAll('input');
    // First item is the zero/reset option (index 0)
    const zeroRatingItem = ratingItems[0];

    zeroRatingItem.dispatchEvent(new Event('change', { bubbles: true }));
    await page.waitForChanges();

    // eslint-disable-next-line no-undef
    const rating = page.root as HTMLModusWcRatingElement;
    expect(rating.value).toBe(0);
  });
});
