export default function Reviews() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What 100 people are saying
      </h1>
      <div>
        {/* REVIEW CARD */}
        <div className="border-b pb-7 mb-7">
          <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                <h2 className="text-white text-2xl">MS</h2>
              </div>
              <p className="text-center">Millan Salcedo</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="flex mr-5">⭐⭐⭐⭐</div>
              </div>
              <div className="mt-5">
                <p className="text-lg font-light">
                  It is very expensive for the quality is providing. In Spain
                  there are other restaurants that are cheaper and the quality
                  of food is much better.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* REVIEW CARD */}
      </div>
    </div>
  );
}
