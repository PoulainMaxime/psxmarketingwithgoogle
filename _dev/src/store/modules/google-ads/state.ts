/**
 * 2007-2021 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2021 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

export interface State {
  status: null|GoogleAdsErrorReason,
  accountChosen: null|AccountInformations,
  list: Array<AccountInformations>,
}

export enum GoogleAdsErrorReason {
  NeedRefreshAfterBilling = 'NeedRefreshAfterBilling',
  CantConnect = 'CantConnect',
  BillingSettingsMissing = 'BillingSettingsMissing',
  Cancelled = 'Cancelled',
  Suspended = 'Suspended',
}

export interface AccountInformations {
  id: string,
  name?: string,
  isAdmin?: boolean,
  isTestAccount?: boolean,
  billingSettings?: {
    isSet: boolean,
    link?: string,
  },
  country?: {
    // eslint-disable-next-line camelcase
    iso_code: null|string,
    name: null|string
  },
  currency?: string,
  timeZone?: string
}

export const state: State = {
  status: null,
  accountChosen: {
    id: 'string',
    name: 'string',
    isAdmin: true,
    isTestAccount: true,
    billingSettings: {
      isSet: true,
      link: 'string',
    },
    country: {
    // eslint-disable-next-line camelcase
      iso_code: 'FR',
      name: 'FRANCE',
    },
    currency: 'EUR',
    timeZone: 'string',
  },
  list: [],
};
