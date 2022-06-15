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
        <dl className={isDescHidden ? 'tabs__table' : 'tabs__table hidden'}>
          <div className="tabs__table-row">
            <dt className="tabs__title">Артикул:</dt>
            <dd className="tabs__value">{id}</dd>
          </div>
          <div className="tabs__table-row">
            <dt className="tabs__title">Тип:</dt>
            <dd className="tabs__value">{type}</dd>
          </div>
          <div className="tabs__table-row">
            <dt className="tabs__title">Количество струн:</dt>
            <dd className="tabs__value">{stringCount} струнная</dd>
          </div>
        </dl>
        <p className={isDescHidden ? 'tabs__product-description hidden' : 'tabs__product-description'}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductTabs;
