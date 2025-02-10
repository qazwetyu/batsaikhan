import ProjectFilter from "@/components/elements/ProjectFilter";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import projectData from "../util/project.json";
export default function Project() {
  const [filter, setFilter] = useState({ status: "", type: "", location: "" });

  // Хаягаар филтер хийх нөхцөл шалгах

  const filteredUsers = projectData.filter((user) => {
    return (
      user.status.toLowerCase().includes(filter.status.toLowerCase()) &&
      user.type.toLowerCase().includes(filter.type.toLowerCase()) &&
      user.location.toLowerCase().includes(filter.location.toLowerCase())
    );
  });

  // Лист гаргах код

  const uniqueStatus = [...new Set(projectData.map((user) => user.status))];
  const uniqueTypes = [...new Set(projectData.map((user) => user.type))];
  const uniqueLocation = [...new Set(projectData.map((user) => user.location))];

  let [currentPage, setCurrentPage] = useState(1);
  let showLimit = 4,
    showPagination = 4;

  let [pagination, setPagination] = useState([]);
  let [limit, setLimit] = useState(showLimit);
  let [pages, setPages] = useState(Math.ceil(filteredUsers.length / limit));
  // console.log(pagination)

  useEffect(() => {
    cratePagination();
  }, [limit, pages, filteredUsers.length]);

  const cratePagination = () => {
    // Паженашион
    let arr = new Array(Math.ceil(filteredUsers.length / limit))
      .fill()
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(filteredUsers.length / limit));
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;

  const getPaginatedProducts = filteredUsers.slice(startIndex, endIndex);

  let start = Math.floor((currentPage - 1) / showPagination) * showPagination;
  let end = start + showPagination;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  return (
    <>
      <Layout headerStyle={6}>
        {/* Крамб хэсэг */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Төслүүд</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Үндсэн</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Төслүүд
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Крамп */}

        <ProjectFilter col="col-lg-6 col-md-6" />
      </Layout>
    </>
  );
}
