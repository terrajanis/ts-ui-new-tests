const {I} = inject()

export class RegisterPage {
    static selectors = {
        email: {xpath: '//input[@name="email"]'},
        password: {xpath: '//input[@name="password"]'},
        blogName: {xpath: '//input[@name="blogName"]'},
        loginLink: {xpath: '//a[contains(., "Войти")]'},
        registerLink: {xpath: '//span[contains(., "Зарегистрироваться")]'},
        policyLink: {xpath: '//a[contains(., "Условия использования Tumblr")]'},
        termsOfServiceTitle: {xpath: '//span[@class="title"]'},
        age: {xpath: '//input[@name="age"]'},
        nextLink: {xpath: '//span[contains(., "Далее")]'},
    }

    static async registerNewUser(email: string): Promise<void> {
        I.waitForVisible(this.selectors.email, 5)
        I.fillField(this.selectors.email, email)
        I.fillField(this.selectors.password, 'Qwaszqwasz1234')
        I.fillField(this.selectors.blogName, 'MyPerfectBlog' + new Date().getTime())
        I.click(this.selectors.registerLink)
    }

    static async checkPolicy(): Promise<void> {
        I.click(this.selectors.policyLink)
        I.switchToNextTab(1)
        I.seeTextEquals('Terms of Service', this.selectors.termsOfServiceTitle)
        I.closeCurrentTab()
    }

    static async enterAge(): Promise<void> {
        I.fillField(this.selectors.age, '33')
        I.click(this.selectors.nextLink)
    }

}
