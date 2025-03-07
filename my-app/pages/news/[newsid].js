import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  // Convert router.query.newsid to a number for comparison
  const filteredID = details.filter((item) => item.id == router.query.newsid);

  return (
    <div>
      {filteredID.length>0 ? (
        filteredID.map((item) => (
          <h1>
            {item.name} - {item.role}
          </h1>
        ))
      ) : (
        <h1>Developer does not exist</h1>
      )}
    </div>
  );
}

export default DetailPage;
