import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProp = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProp)(CollectionsOverview)