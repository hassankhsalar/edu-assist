import colleges from "@/data/colleges.json";
import Image from "next/image";

export default function CollegeDetails({ params }) {
  const college = colleges.find((c) => c.id === params.id);

  if (!college) {
    return <div className="text-center py-10 text-red-600">College not found!</div>;
  }

  return (
    <div className="w-11/12 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{college.name}</h1>
      <img src={college.image} alt={college.name} className="w-full max-h-[400px] object-cover rounded" />

      <div className="mt-6 space-y-4 text-gray-700">
        <p><strong>Admission Dates:</strong> {college.admissionDates}</p>
        <p><strong>Rating:</strong> {college.rating}</p>
        <p><strong>Admission Process:</strong> {college.admissionProcess}</p>
        
        <div>
          <strong>Events:</strong>
          <ul className="list-disc ml-6">
            {college.events.map((event, idx) => <li key={idx}>{event}</li>)}
          </ul>
        </div>

        <div>
          <strong>Sports:</strong> {college.sports.join(", ")}
        </div>

        <div>
          <strong>Research Works:</strong>
          <ul className="list-disc ml-6">
            {college.researchWorks.map((work, idx) => (
              <li key={idx}>
                <a href={work.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                  {work.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Gallery:</strong>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {college.galleryImages.map((img, idx) => (
              <img key={idx} src={img} alt={`Gallery ${idx}`} className="rounded h-48 object-cover" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
