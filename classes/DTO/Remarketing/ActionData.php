<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */

namespace PrestaShop\Module\PsxMarketingWithGoogle\DTO\Remarketing;

use JsonSerializable;

class ActionData implements JsonSerializable
{
    /** https://support.google.com/google-ads/answer/9028614?hl=en&ref_topic=3165803#zippy=%2Cinstall-with-global-site-tag */

    /**
     * @var array
     */
    protected $items;

    /**
     * @var int
     */
    protected $awMerchandId;

    /**
     * @var string
     */
    protected $awFeedCountry;

    /**
     * @var string
     */
    protected $awFeedLanguage;

    /**
     * @var string|null
     */
    protected $sendTo;

    /**
     * @var float
     */
    protected $discount;

    public function jsonSerialize(): array
    {
        return [
            'send_to' => $this->sendTo,
            'items' => $this->items,
            'discount' => $this->discount,
            'aw_merchant_id' => $this->awMerchandId,
            'aw_feed_country' => $this->awFeedCountry,
            'aw_feed_language' => $this->awFeedLanguage,
        ];
    }

    /**
     * Set the value of awFeedLanguage
     *
     * @param string $awFeedLanguage
     *
     * @return self
     */
    public function setAwFeedLanguage(string $awFeedLanguage)
    {
        $this->awFeedLanguage = $awFeedLanguage;

        return $this;
    }

    /**
     * Set the value of awMerchandId
     *
     * @param int $awMerchandId
     *
     * @return self
     */
    public function setAwMerchandId(int $awMerchandId)
    {
        $this->awMerchandId = $awMerchandId;

        return $this;
    }

    /**
     * Set the value of awFeedCountry
     *
     * @param string $awFeedCountry
     *
     * @return self
     */
    public function setAwFeedCountry(string $awFeedCountry)
    {
        $this->awFeedCountry = $awFeedCountry;

        return $this;
    }

    /**
     * Set the value of items
     *
     * @param array $items
     *
     * @return self
     */
    public function setItems(array $items)
    {
        $this->items = $items;

        return $this;
    }

    /**
     * @param string|null $sendTo
     *
     * @return self
     */
    public function setSendTo($sendTo)
    {
        $this->sendTo = $sendTo;

        return $this;
    }

    /**
     * Set the value of discount
     *
     * @param float $discount
     *
     * @return self
     */
    public function setDiscount(float $discount)
    {
        $this->discount = $discount;

        return $this;
    }
}
