import {InterestsPage} from "../pages/interestsPage";
import {MainPage} from "../pages/mainPage";
import {RandomUtils} from "../utils/RandomUtils";
import {RegisterPage} from "../pages/registerPage";
import {DashboardPage} from "../pages/dashboardPage";


Feature('Регистрация нового пользователя')

const email = RandomUtils.randomEmail()

Scenario('Регистрация нового пользователя - позитивный сценарий', async () => {
    await MainPage.goToRegisterPage()

    await RegisterPage.checkPolicy()
    await RegisterPage.registerNewUser(email)
    await RegisterPage.enterAge()

    await InterestsPage.fillInterests()

    await DashboardPage.checkUserExists()
}).tag('desktop')