import Head from 'next/head'

import WeatherDisplay from "@/components/WeatherDisplay";
import { TasmanWebcamDisplay, NZTAWebcamDisplay, MSCWebcamDisplay } from "@/components/Webcams";

export default function Home() {
  return (
    <>
      <Head>
        <title>St. Arnaud</title>
        <meta name="description" content="At a glance weather and webcam info for St. Arnaud, New Zealand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="visually-hidden">St. Arnaud</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6">
              <section className="mt-4">
                <WeatherDisplay />
              </section>
              <section className="mt-4">
                <TasmanWebcamDisplay />
              </section>
            </div>
            <div className="col-md-5 col-lg-6">
              <section className="mt-4">
                <NZTAWebcamDisplay />
              </section>
              <section className="mt-4">
                <MSCWebcamDisplay />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
