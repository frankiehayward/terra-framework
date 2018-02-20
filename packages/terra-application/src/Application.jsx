/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationLayout from 'terra-navigation-layout';
import PrimaryNavigationMenu from './PrimaryNavigationMenu';
import ApplicationMenuWrapper from './ApplicationMenuWrapper';
import ApplicationHeaderWrapper from './ApplicationHeaderWrapper';

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { name, config, primaryRoutes, indexPath } = this.props;

    const updatedConfig = Object.assign({}, config);

    const newMenus = Object.assign({}, config.menu);
    if (primaryRoutes.length > 1) {
      newMenus['/'] = {
        path: '/',
        component: {
          tiny: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: primaryRoutes,
            },
          },
          small: {
            componentClass: PrimaryNavigationMenu,
            props: {
              routes: primaryRoutes,
            },
          },
        },
      };
    }

    Object.keys(newMenus).forEach((menuKey) => {
      const newMenu = Object.assign({}, newMenus[menuKey]);

      const newMenuComponent = Object.assign({}, newMenu.component);

      ['default', 'tiny', 'small', 'medium', 'large', 'huge'].forEach((size) => {
        if (!newMenuComponent[size]) {
          return;
        }

        const configForSize = Object.assign({}, newMenuComponent[size]);

        const propsForSize = Object.assign({}, configForSize.props);

        propsForSize.terraApplicationProps = {
          overrideComponentClass: configForSize.componentClass,
          name: this.props.name,
          key: 'MenuVessel',
        };
        configForSize.props = propsForSize;
        configForSize.componentClass = ApplicationMenuWrapper;

        newMenuComponent[size] = configForSize;
      });

      newMenu.component = newMenuComponent;
      newMenus[menuKey] = newMenu;
    });

    updatedConfig.menu = newMenus;

    return (
      <NavigationLayout
        config={updatedConfig}
        header={<ApplicationHeaderWrapper
          primaryRoutes={primaryRoutes} nameConfig={{ title: name }} utilityConfig={{ userName: 'John Rambo' }}
        />
        }
        indexPath={indexPath}
      />
    );
  }
}

Application.propTypes = {
  name: PropTypes.string,
  brandIcon: PropTypes.node,
  location: PropTypes.object,
};

export default Application;