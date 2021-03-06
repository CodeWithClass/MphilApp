import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { SettingsPage } from '../settings/settings'
import { AddFoodPage } from './addfood/addfood'
import { UserStatsProvider } from '../../services/user.stats'

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userStats: UserStatsProvider
  ) {
    this.refresh()
  }

  refresh(event = { complete: () => {} }, manual = false) {
    if (manual)
      return setTimeout(() => {
        this.userStats.todaysDate = this.userStats.ABSOLUTE_DATE
        event.complete()
      }, 500)
    event.complete()
    this.userStats.todaysDate = this.userStats.ABSOLUTE_DATE
  }

  launchSettings() {
    this.navCtrl.push(SettingsPage, {}, { animate: true, direction: 'forward' })
  }

  launchAddFoodPage() {
    this.navCtrl.push(AddFoodPage, {}, { animate: true, direction: 'forward' })
  }

  public popFoodPage() {
    this.navCtrl.pop()
  }
}
