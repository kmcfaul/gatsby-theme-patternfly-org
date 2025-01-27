/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Page, PageHeader, PageSidebar, Toolbar, ToolbarGroup, ToolbarItem, Form, TextInput } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import SideNav from '../components/sideNav';
import TopNav from '../components/topNav';
import Banner from '../components/banner';
import Footer from '../components/footer';
import './sideNavLayout.css';

// ParityComponentName: aboutmodal <=> aboutmodalbox
const SideNavLayout = ({ children, location, context, hideSideNav = false, parityComponent }) => {
  const initialBannerOpen = typeof window !== 'undefined' && sessionStorage && sessionStorage.getItem('pf4-banner-closed')
    ? false
    : true;
  const [ isBannerOpen, setBannerOpen ] = React.useState(initialBannerOpen)
  let docSearchInit = false;
  // Add docsearch
  useEffect(() => {
    if (!docSearchInit && typeof window !== 'undefined' && window.docsearch) {
      window.docsearch({
        apiKey: '06941733239da4f8617d272cf2ed4d5c',
        indexName: 'patternfly',
        inputSelector: '#global-search-input',
        debug: false // Set debug to true if you want to inspect the dropdown
      });
      docSearchInit = true;
    } else {
      console.warn('Search has failed to load');
    }
  });

  // Put queries for Top and Side navs here for performance
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    prInfo: envVars(name: { eq: "PR_INFO" }) {
      num
      url
    }
    allSitePage(filter: { context: { navSection: { ne: null } } },
                sort: { fields: context___title }) {
      nodes {
        path
        context {
          title
          navSection
          source
        }
      }
    }
    sitePlugin(name: { eq: "gatsby-theme-patternfly-org" }) {
      pluginOptions {
        context
        topNavItems {
          text
          path
          contexts
        }
        sideNav {
          core {
            section
            text
            path
          }
          react {
            section
            text
            path
          }
          get_started {
            section
            text
            path
          }
          design_guidelines {
            section
            text
            path
          }
          contribute {
            section
            text
            path
          }
        }
      }
    }
  }
  `);
  const { title } = data.site.siteMetadata;
  const { num, url } = data.prInfo;
  const { topNavItems, sideNav, context: pageSource } = data.sitePlugin.pluginOptions;
  const SideBar = hideSideNav
    ? undefined
    : <PageSidebar
        nav={<SideNav
          location={location}
          context={context}
          pageSource={pageSource}
          allPages={data.allSitePage.nodes}
          sideNavContexts={sideNav}
          parityComponent={parityComponent} />}
        className="ws-page-sidebar" />;
  
  const PageToolbar = pageSource === 'org'
    ? <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>
            {/* We can afford to use style tags because this is only on the site ONCE */}
            <Form
              onSubmit={event => {
                event.preventDefault();
                return false;
              }}
              style={{
                position: 'relative',
              }}
            >
              <TextInput
                type="text"
                id="global-search-input"
                name="global-search-input"
                placeholder="Search"
                style={{
                  color: '#fff',
                  backgroundColor: 'var(--pf-global--BackgroundColor--dark-100)',
                  border: 0,
                  paddingLeft: '26px'
                }}
              />
              <SearchIcon
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '4px'
                }} />
            </Form>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    : undefined;
  const Header = (
    <PageHeader
      className="ws-page-header"
      toolbar={PageToolbar}
      logo={num ? `PR #${num}` : title}
      logoProps={{
        href: url || '/'
      }}
      showNavToggle
      topNav={<TopNav
        location={location}
        context={context}
        navItems={topNavItems} />}
    />
  );

  const closeBanner = () => {
    sessionStorage.setItem('pf4-banner-closed', 'true');
    setBannerOpen(false);
  }

  return (
    <div>
      {isBannerOpen && <Banner onClose={closeBanner} />}
      <Page isManagedSidebar header={Header} sidebar={SideBar}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </Page>
      <Footer />
    </div>
  );
}

export default SideNavLayout;
