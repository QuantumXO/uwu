import { useEffect, useState } from 'react';
import staticStyles from './style';
import { BigNumber, valueToBigNumber } from '@aave/protocol-js';
import { UwUUiPriceGetterContract } from '../../../../libs/aave-protocol-js/UwUUiPriceGetterContract';
import { useUwuProviderContext } from '../../../../libs/uwu-provider/UwuProvider';

interface MarketPriceProps {
  value: BigNumber;
}

export default function MarketPrice({ value }: MarketPriceProps) {
  const [uwuPrice, setUwuPrice] = useState('0');
  const { provider: uwuProvider } = useUwuProviderContext();

  useEffect(() => {
    const provider = uwuProvider;
    const uwuUIPriceGetter = new UwUUiPriceGetterContract(
      provider,
      '0x027D9e6F282A6620BF3B44289FcfE444305Dc514'
    );
    uwuUIPriceGetter.getPrice().then((price) => {
      const priceStr = valueToBigNumber(price.toString())
        .div(10 ** 8)
        .decimalPlaces(2)
        .toString();
      setUwuPrice(priceStr);
    });
  }, []);
  const buy = () => {
    window.location.replace(
      'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x55C08ca52497e2f1534B59E2917BF524D4765257&chainId=1'
    );
  };

  return (
    <div className="MarketPrice">
      <div className="MarketPrice__values">
        <div className="MarketPrice__title">UwU</div>
        <div className="MarketPrice__price">
          {uwuPrice.toString() === '0' ? 'Fetching...' : `$${uwuPrice}`}
        </div>
      </div>
      <style jsx={true} global={true}>
        {staticStyles}
      </style>
    </div>
  );
}
