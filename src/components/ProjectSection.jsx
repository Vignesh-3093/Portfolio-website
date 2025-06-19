import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Leave Management Project",
    description:
      "A Leave Management App using react in which we can able to apply leave done for Intern, Employee , Manager , Admin ",
    image: "/projects/Leave.jpg",
    tags: ["React", "CSS", "TypeScript"],
    githuburl: "https://github.com/Vignesh-3093/Leave-Management-Project",
  },
  {
    id: 2,
    title: "Pivot Table",
    description:
      "Pivot table use for caluclating sums min max count of the dataset which have been uploaded",
    image: "/projects/pivot.jpg",
    tags: ["React", "JavaScript"],
    githuburl: "https://github.com/Vignesh-3093/Pivot-Generator-1",
  },
  {
    id: 3,
    title: "Trello App",
    description: "It's a to-do list ",
    image: "/projects/trello.png",
    tags: ["React", "JavaScript"],
    githuburl: "https://github.com/Vignesh-3093/Trello-Clone",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.Each Project was carefully crafted
          with attentio to detail, performance and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-ful bg-secondary text-secondary-foreground bor">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-3 ">
                    <a
                      href={project.githuburl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Chech on Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
