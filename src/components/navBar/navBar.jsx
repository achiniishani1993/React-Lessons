import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  return (
 <div className="font-serif">
  <div className="relative h-[300px] md:h-[400px] bg-cover bg-center bg-[url('/bgg.png')] text-black px-4">

    <div className="absolute top-4 right-4">
      <MenuIcon className="text-black text-3xl md:text-4xl cursor-pointer" />
    </div>

    <div className="flex flex-col justify-center items-center h-full text-center">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl p-2">
        Hey! Welcome to my portfolio
      </h1>

      <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold max-w-2xl">
        I'm a Front-End Developer passionate about building clean, responsive,
        and user-friendly web experiences. This portfolio showcases some of my
        work, skills, and learning journey so far. Feel free to explore my
        projects and reach out if you'd like to connect or collaborate!
      </p>
    </div>

  </div>
</div>
  )
}
