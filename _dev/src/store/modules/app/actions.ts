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

import MutationsTypes from './mutations-types';
import ActionsTypes from './actions-types';
import HttpClientError from '../../../utils/HttpClientError';

export default {
  async [ActionsTypes.REQUEST_DOC_AND_FAQ](
    {
      commit,
      rootState,
    },
  ) {
    try {
      const response = await fetch(`${rootState.app.psxMktgWithGoogleAdminAjaxUrl}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify({
          action: 'retrieveFaq',
        }),
      });
      const json = await response.json();
      if (!response.ok) {
        throw new HttpClientError(response.statusText, response.status);
      }
      commit(MutationsTypes.SAVE_DOC_AND_FAQ, json);
    } catch (error) {
      console.error(error);
    }
  },
};
