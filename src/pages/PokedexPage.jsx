import { useMemo, useState } from 'react'
import PokedexGrid from '../components/pokedex/PokedexGrid'
import PokedexFilterBar from '../components/pokedex/PokedexFilterBar'
import { projects } from '../data/projects'

const PokedexPage = () => {
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchType = filterType
        ? project.types.includes(filterType)
        : true
      const lower = search.toLowerCase()
      const matchText = lower
        ? project.name.toLowerCase().includes(lower) ||
          project.stacks.some((stack) =>
            stack.toLowerCase().includes(lower),
          )
        : true
      return matchType && matchText
    })
  }, [search, filterType])

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
            Project Dex
          </p>
          <h1 className="text-3xl font-black text-white sm:text-4xl">
            프로젝트 도감
          </h1>
          <p className="text-slate-300">
            타입/스택으로 필터링하고, 원하는 엔트리를 눌러 상세를 확인하세요.
          </p>
        </div>
        <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-sm text-amber-100 shadow shadow-cyan-500/20 sm:block">
          Total Entries
          <div className="text-3xl font-black text-white">
            {filtered.length.toString().padStart(3, '0')}
          </div>
        </div>
      </div>

      <PokedexFilterBar
        search={search}
        onSearch={setSearch}
        filterType={filterType}
        onFilterType={setFilterType}
      />

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center text-slate-300">
          아직 등록된 프로젝트가 없습니다. 엔트리를 추가해 주세요.
        </div>
      ) : (
        <PokedexGrid projects={filtered} />
      )}
    </section>
  )
}

export default PokedexPage
