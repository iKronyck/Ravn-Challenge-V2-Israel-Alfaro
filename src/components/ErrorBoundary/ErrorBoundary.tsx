import React from 'react';
import {View} from 'react-native';
import {NoticeCell} from '@components';
import {TErrorBoundary} from './ErrorBoundary.type';

export const ErrorBoundary: React.FC<TErrorBoundary> = ({error, children}) => (
  <View>{error ? <NoticeCell message="Failed to Load Data" /> : children}</View>
);
