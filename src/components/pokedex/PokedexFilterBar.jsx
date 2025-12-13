import { projectTypes } from '../../data/projects'

const PokedexFilterBar = ({ search, onSearch, filterType, onFilterType }) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="프로젝트 이름이나 스택 검색"
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
        />
        <select
          value={filterType}
          onChange={(e) => onFilterType(e.target.value)}
          className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-cyan-300 focus:outline-none"
        >
          <option value="">모두 보기</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="text-xs text-slate-400">
        Filter by type or search like a Pokédex scan.
      </div>
    </div>
  )
}

PokedexFilterBar.propTypes = {
}

export default PokedexFilterBar
