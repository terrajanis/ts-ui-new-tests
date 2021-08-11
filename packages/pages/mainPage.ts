const {I} = inject()

export class MainPage {
    static selectors = {
        registerLink: {xpath: '//a[contains(., "Зарегистрироваться")]'},
        loginLink: {xpath: '//a[contains(., "Войти")]'},
    }

    static async goToRegisterPage(): Promise<void> {
        I.amOnPage('')
        I.click(locate(this.selectors.registerLink).first())
    }
}
