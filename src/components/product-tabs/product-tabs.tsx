import { useState } from 'react';
import { TabsProps } from '../../types/rate';

function ProductTabs({ id, type, description, stringCount }: TabsProps): JSX.Element {
  const [isDescHidden, setIsDescHidden] = useState(true);
  const activeTabButtonClass = 'button button--medium tabs__button';
  const tabButtonClass = 'button button--black-border button--medium tabs__button';

  return(
    <div className="tabs">
      <button
        className={isDescHidden ? activeTabButtonClass : tabButtonClass}
        onClick={() => setIsDescHidden(true)}
      >
        Характеристики
      </button>
      <button
        className={isDescHidden ? tabButtonClass : activeTabButtonClass}
        onClick={() => setIsDescHidden(false)}
      >
        Описание
      </button>
      <div className="tabs__content" id="characteristics">
        <table className={isDescHidden ? 'tabs__table' : 'tabs__table hidden'}>
          <tr className="tabs__table-row">
            <td className="tabs__title">Артикул:</td>
            <td className="tabs__value">{id}</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Тип:</td>
            <td className="tabs__value">{type}</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Количество струн:</td>
            <td className="tabs__value">{stringCount} струнная</td>
          </tr>
        </table>
        <p className={isDescHidden ? 'tabs__product-description hidden' : 'tabs__product-description'}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductTabs;
