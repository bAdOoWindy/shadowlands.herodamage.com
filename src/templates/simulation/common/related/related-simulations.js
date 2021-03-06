// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
// Components
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

const RelatedSimulations = ({ data: { soulbindSimulations, relatedSimulations }, simulationFeaturedOrder, simulationCategory, simulationType, t }) => {
  if (!relatedSimulations) return null
  const simulations = soulbindSimulations && soulbindSimulations.edges ? { edges: [...soulbindSimulations.edges, ...relatedSimulations.edges] } : { edges: [...relatedSimulations.edges] }
  if (simulations.edges.length < 1) return null

  const relatedSimulationCategories = simulations.edges.filter((edge) => !!edge.node.context.simulationFeaturedOrder)
  const relatedSimulationTypes = simulations.edges
    .filter((edge) => edge.node.context.simulationCategory === simulationCategory)
    .sort((a, b) => a.node.context.simulationTypeOrder < b.node.context.simulationTypeOrder)

  return (
    <>
      {relatedSimulationCategories.length >= 1 &&
      <div>
        {relatedSimulationCategories.map((edge, index) => {
          const { node: { context, path } } = edge
          const { simulationCategory: nodeSimulationCategory } = context
          return (
            <Button key={index} variant="contained" color="primary"
              disabled={simulationCategory === nodeSimulationCategory}
              component={Link} to={path} style={{ margin: '4px 8px' }}>
              {t(nodeSimulationCategory)}
            </Button>
          )
        })}
      </div>}
      {relatedSimulationTypes.length > 1 &&
      <div>
        <Divider/>
        {relatedSimulationTypes.map((edge, index) => {
          const { node: { context, path } } = edge
          const { simulationType: nodeSimulationType } = context
          return (
            <Button key={index} variant="contained" color="primary"
              disabled={simulationType === nodeSimulationType}
              component={Link} to={path} style={{ margin: '4px 8px' }}>
              {t(nodeSimulationType)}
            </Button>
          )
        })}
      </div>}
    </>
  )
}

RelatedSimulations.propTypes = {
  data: PropTypes.object.isRequired,
  simulationFeaturedOrder: PropTypes.number,
  simulationCategory: PropTypes.string,
  simulationType: PropTypes.string,
  t: PropTypes.func.isRequired
}

export default RelatedSimulations
