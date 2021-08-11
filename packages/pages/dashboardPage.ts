const {I} = inject()

export class DashboardPage {
    static selectors = {
        accountButton: {xpath: '//button[@aria-label="Учетная запись"]'}
    }

    static async checkUserExists(): Promise<void> {
        I.waitForVisible(this.selectors.accountButton, 15)
        I.seeElement(this.selectors.accountButton)
    }
}
