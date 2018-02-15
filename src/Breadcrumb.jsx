import React, { Component } from 'react';
import history from './history';
import { Breadcrumb } from 'semantic-ui-react';
class BreadcrumbComponent extends Component {
  render() {
    const histloction =
      history && history.location
        ? history.location.pathname
            .split('/')
            .join('>/>')
            .split('>')
        : null;

    return (
      <div className="breadCrumbBar">
        <span>Navigation:</span>
        <Breadcrumb>
          {histloction
            ? histloction.map((path, index, array) => {
                var redirectURI = array.slice(1, index + 1).join('');
                var a = path.slice(0, 1);
                var b = path.slice(1);
                var c = a.toUpperCase();
                path = c + b;
                return path !== '/' ? (
                  <Breadcrumb.Section
                    key={index}
                    link
                    onClick={() => {
                      history.push(redirectURI);
                    }}
                  >
                    {path}
                  </Breadcrumb.Section>
                ) : (
                  <Breadcrumb.Divider key={index} icon="right chevron" />
                );
              })
            : null}
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadcrumbComponent;
