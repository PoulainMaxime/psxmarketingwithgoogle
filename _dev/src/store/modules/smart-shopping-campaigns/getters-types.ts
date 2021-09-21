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

enum GettersTypes {
  GET_REMARKETING_TRACKING_TAG_IS_SET = 'GET_REMARKETING_TRACKING_TAG_IS_SET',

  // request getters
  GET_REPORTING_PERIOD_SELECTED = 'GET_REPORTING_PERIOD_SELECTED',
  GET_REPORTING_START_DATES = 'GET_REPORTING_START_DATES',
  GET_REPORTING_END_DATES = 'GET_REPORTING_END_DATES',
  GET_REPORTING_FORMATTED_START_DATES = 'GET_REPORTING_FORMATTED_START_DATES',
  GET_REPORTING_FORMATTED_END_DATES = 'GET_REPORTING_FORMATTED_END_DATES',
  GET_REPORTING_DAILY_RESULT_TYPE = 'GET_REPORTING_DAILY_RESULT_TYPE',
  GET_REPORTING_CAMPAIGNS_PERFORMANCES_ORDERING = 'GET_REPORTING_CAMPAIGNS_PERFORMANCES_ORDERING',
  GET_REPORTING_PRODUCTS_PERFORMANCES_ORDERING = 'GET_REPORTING_PRODUCTS_PERFORMANCES_ORDERING',
  GET_REPORTING_PRODUCTS_PARTITIONS_PERFORMANCES_ORDERING = 'GET_REPORTING_PRODUCTS_PARTITIONS_PERFORMANCES_ORDERING',

  // result getters
  GET_REPORTING_KPIS = 'GET_REPORTING_KPIS',
  GET_REPORTING_DAILY_RESULT = 'GET_REPORTING_DAILY_RESULT',
  GET_REPORTING_CAMPAIGNS_PERFORMANCES = 'GET_REPORTING_CAMPAIGNS_PERFORMANCES',
  GET_REPORTING_CAMPAIGNS_PERFORMANCES_NEXT_PAGE_TOKEN = 'GET_REPORTING_CAMPAIGNS_PERFORMANCES_NEXT_PAGE_TOKEN',
}

export {GettersTypes as default};