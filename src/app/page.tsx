import { CarCard, Hero } from '@/components'
import { CarProps } from '@/types'
import { fetchCars } from '@/utils'

const Home = async () => {
  const allCars = await fetchCars()

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        {allCars.length < 1 ? (
          <div className='home__error-container'>
            <h2 className='text-black text-xl'>Oops, no results</h2>
          </div>
        ) : (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car: CarProps) => {
                return (
                  <CarCard car={car} />
                )
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default Home