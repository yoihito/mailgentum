import React from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive'

export const DesktopScreen = ({ children }) => <Responsive minWidth={992} children={children} />;
export const TabletScreen = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
export const MobileScreen = ({ children }) => <Responsive maxWidth={768} children={children} />;
export const DefaultScreen = ({ children }) => <Responsive minWidth={768} children={children} />;

DesktopScreen.propTypes = { children: PropTypes.node };
TabletScreen.propTypes = { children: PropTypes.node };
MobileScreen.propTypes = { children: PropTypes.node };
DefaultScreen.propTypes = { children: PropTypes.node };