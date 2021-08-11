import LocatorOrString = CodeceptJS.LocatorOrString;


const {I} = inject()

let chai = require('chai')
let expect = chai.expect

export class InterestsPage {
    static selectors = {
        webSeries: {xpath: '//div[@data-name="web series"]'},
        anime: {xpath: '//div[@data-name="anime"]'},
        fashion: {xpath: '//div[@data-name="fashion"]'},
        travel: {xpath: '//div[@data-name="travel"]'},
        technology: {xpath: '//div[@data-name="technology"]'},
        tagName: {xpath: '//span[@class="tag-name"]'},
        nextButtonCounter: {xpath: '//span[@class="next-button-counter-container"]'},
        nextButton: {xpath: '//span[contains(., "Next")]'},
    }

    static async fillInterests(): Promise<void> {
        I.waitForVisible(this.selectors.webSeries, 15)
        await this.fillInterest(this.selectors.webSeries, 'веб-сериалы', 1, '4', true);
        I.waitForVisible(this.selectors.anime, 5)
        await this.fillInterest(this.selectors.anime, 'аниме', 2, '3', true);
        I.waitForVisible(this.selectors.fashion, 5)
        await this.fillInterest(this.selectors.fashion, 'мода', 3, '2', true);
        I.waitForVisible(this.selectors.travel, 5)
        await this.fillInterest(this.selectors.travel, 'путешествия', 4, '1', true);
        I.waitForVisible(this.selectors.technology, 5)
        await this.fillInterest(this.selectors.technology, 'технологии', 5, '0', false);
        I.click(this.selectors.nextButton)
    }

    private static async fillInterest(locator:LocatorOrString, interestName: string, position: number, interestsNumber: string, isNotFinished: boolean) {
        I.click(locator)
        expect(await I.grabTextFrom(locate(this.selectors.tagName).at(position))).to.equal(interestName)
        if(isNotFinished) {
        expect(await I.grabTextFrom(this.selectors.nextButtonCounter)).to.equal(interestsNumber)
        }
    }
}
