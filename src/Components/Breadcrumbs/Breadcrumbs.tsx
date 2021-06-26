import React, { Fragment } from 'react'
import './Breadcrumbs.scss'
import { Link, useLocation } from 'react-router-dom'

type BreadcrumbType = {
  path: string
  name?: string
}

export const Breadcrumbs = ({
  breadcrumbs,
  separator,
}: {
  breadcrumbs: BreadcrumbType[]
  separator?: string | JSX.Element
}) => {
  const location = useLocation()
  return (
    <div className="Breadcrumbs">
      {breadcrumbs.map(
        (breadcrumb) =>
          (location.pathname + location.search).includes(breadcrumb.path) && (
            <Fragment key={breadcrumb.path}>
              <Link
                to={breadcrumb.path}
                className={`Breadcrumbs__section ${
                  location.pathname + location.search === breadcrumb.path
                    ? 'Breadcrumbs__section--is-active'
                    : ''
                }`}
              >
                {breadcrumb.name}
              </Link>
              {!(location.pathname + location.search === breadcrumb.path) && (
                <div className="Breadcrumbs__separator">{separator || '>'}</div>
              )}
            </Fragment>
          ),
      )}
    </div>
  )
}
