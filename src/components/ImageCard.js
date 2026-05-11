const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white/60">
            {/* Rasm konteyneri */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image.webformatURL}
                    alt={image.user}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Rasm ustidagi shaffof qatlam (Overlay) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="text-white text-sm font-medium">📷 @{image.user}</span>
                </div>
            </div>

            {/* Ma'lumotlar qismi */}
            <div className="p-5">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-800 leading-tight">
                        Photo by <span className="text-indigo-600">@{image.user}</span>
                    </h3>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200/50 mb-4">
                    <div className="text-center">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Views</p>
                        <p className="text-sm font-semibold text-slate-700">{image.views.toLocaleString()}</p>
                    </div>
                    <div className="text-center border-x border-slate-200/50">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Loads</p>
                        <p className="text-sm font-semibold text-slate-700">{image.downloads.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Likes</p>
                        <p className="text-sm font-semibold text-rose-500">{image.likes.toLocaleString()}</p>
                    </div>
                </div>

                {/* Teglar qismi */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-md transition-colors hover:bg-indigo-100"
                        >
                            #{tag.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageCard;