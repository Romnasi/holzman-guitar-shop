import { TabsProps } from '../../types/rate';
import { Link, useLocation } from 'react-router-dom';
import { TabHash } from '../../const/tab-hash';

function ProductTabs({ id, type, description, stringCount }: TabsProps): JSX.Element {
  const { hash } = useLocation();
  const isDescHidden = hash === '' || hash === TabHash.CHARACTERISTICS;
  const activeTabButtonClass = 'button button--medium tabs__button';
  const tabButtonClass = 'button button--black-border button--medium tabs__button';

  return(
    <div className="tabs">
      <Link
        className={isDescHidden ? activeTabButtonClass : tabButtonClass}
        to={TabHash.CHARACTERISTICS}
      >
        Характеристики
      </Link>
      <Link
        className={isDescHidden ? tabButtonClass : activeTabButtonClass}
        to={TabHash.DESCRIPTION}
      >
        Описание
      </Link>
      <div className="tabs__content" id="characteristics">
        <dl
          className={isDescHidden ? 'tabs__table' : 'tabs__table hidden'}
          data-testid="dl-characteristics"
        >
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
            <dd className="tabs__value">{`${stringCount} струнная`}</dd>
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
