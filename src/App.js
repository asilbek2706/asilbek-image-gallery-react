import {useEffect, useState} from "react";
import ImageCard from "./components/ImageCard";
import {Mosaic} from "react-loading-indicators";
import ImageSearch from "./components/ImageSearch";

function App() {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [term])

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 transition-all duration-500">
            <div className="container mx-auto max-w-7xl">

                <div className="mb-12 flex justify-center">
                    <ImageSearch searchText={(text) => setTerm(text)} setIsLoading={setIsLoading} />
                </div>

                {(isLoading || images.length === 0) && (
                    <div className="flex flex-col items-center justify-center mt-32 space-y-4">
                        <Mosaic color="#10b981" size="large" />
                        {!isLoading && images.length === 0 && (
                            <p className="text-slate-400 font-medium animate-pulse">
                                Hech narsa topilmadi, boshqa so'z bilan qidirib ko'ring...
                            </p>
                        )}
                    </div>
                )}

                {!isLoading && images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className="transform transition-all duration-500 hover:-translate-y-2"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <ImageCard image={image} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
