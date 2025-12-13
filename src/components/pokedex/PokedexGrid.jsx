import PokedexCard from './PokedexCard'

const PokedexGrid = ({ projects }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <PokedexCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default PokedexGrid
