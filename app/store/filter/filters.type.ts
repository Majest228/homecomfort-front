export default interface IFilter {
  categoryId: [string, string]
  title: [string]
  price: [number, number]
  resetFilter: boolean
  manufacturerId: number[]
}
