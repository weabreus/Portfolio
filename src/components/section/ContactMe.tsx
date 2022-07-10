import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

const ContactMe = () => {
  return (
    <section className="w-full flex justify-center lg:w-[50%] sm:block sm:justify-start sm:h-full h-[50%]">
      <div>
        <h2 className="mb-2.5 font-semibold text-lightest-slate leading-none md:text-[2vw] text-[6vw]">
          Get In Touch
        </h2>
        <p className="m-0 mb-4 text-slate font-sans text-base font-extralight sm:text-[2.5vw] md:text-[1.5vw] text-[4.5vw]">
          I'm always looking for new opportunities, my inbox is always open. If
          you require any services or a team member for any of the following
          technologies, please feel free to reach out.
        </p>
        {/* Programming Languages */}
        <div className="flex justify-evenly mb-6">
          {/* Javascript */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <g fill="none" fill-rule="evenodd">
              <rect fill="rgb(204 214 246)" className="w-8 h-8" />
              <path
                stroke="rgb(129 140 248)"
                stroke-width="2"
                d="M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"
              />
            </g>
          </svg>

          {/* Typescritp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            className="w-8 h-8"
          >
            <path
              className="st0"
              fill="rgb(204 214 246)"
              d="M0 200V0h400v400H0"
            />
            <path
              className="st1"
              fill="rgb(129 140 248)"
              d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
            />
          </svg>

          {/* Python */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path
              fill="rgb(204 214 246)"
              d="m11.727 0c-.967.001-1.914.086-2.834.248l.098-.014c-2.423.428-2.862 1.324-2.862 2.976v2.182h5.726v.727h-7.874c-.02 0-.043-.001-.066-.001-1.737 0-3.184 1.239-3.507 2.881l-.004.023c-.256.872-.403 1.874-.403 2.91s.147 2.038.422 2.985l-.019-.076c.407 1.695 1.379 2.902 3.04 2.902h1.969v-2.616c.045-1.953 1.622-3.523 3.574-3.557h.003 5.719c1.584-.013 2.863-1.299 2.863-2.885 0-.009 0-.017 0-.026v.001-5.452c-.104-1.561-1.314-2.81-2.848-2.975l-.014-.001c-.866-.149-1.863-.234-2.879-.234-.036 0-.071 0-.107 0h.005zm-3.096 1.755h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.601 0-1.089-.487-1.091-1.088 0-.002 0-.005 0-.008 0-.596.48-1.08 1.074-1.086h.001z"
            />
            <path
              fill="rgb(129 140 248)"
              d="m18.287 6.119v2.542c-.022 1.977-1.604 3.578-3.572 3.63h-.005-5.719c-1.584.033-2.856 1.322-2.862 2.909v5.453c0 1.551 1.349 2.464 2.862 2.91.855.277 1.839.437 2.86.437s2.005-.16 2.927-.456l-.068.019c1.44-.417 2.862-1.258 2.862-2.91v-2.184h-5.719v-.727h8.582c1.664 0 2.284-1.161 2.863-2.902.28-.87.441-1.871.441-2.91s-.161-2.04-.46-2.979l.019.07c-.411-1.656-1.2-2.902-2.863-2.902zm-3.216 13.807h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.603 0-1.091-.489-1.091-1.091 0-.001 0-.003 0-.004 0-.002 0-.005 0-.007 0-.595.48-1.077 1.074-1.08z"
            />
          </svg>

          {/* PHP */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8"
          >
            <path
              fill="rgb(129 140 248)"
              d="M 16 7.1679688 C 7.165 7.1679688 0 10.932031 0 15.582031 C 0 20.232031 7.165 23.998047 16 23.998047 C 24.835 23.998047 32 20.232031 32 15.582031 C 32 10.932031 24.835 7.1679687 16 7.1679688 z M 16 8.0078125 C 24.57 8.0078125 31.160156 11.617031 31.160156 15.582031 C 31.160156 19.547031 24.565 23.158203 16 23.158203 C 7.43 23.158203 0.83984375 19.547031 0.83984375 15.582031 C 0.83984375 11.617031 7.435 8.0078125 16 8.0078125 z M 14.056641 9.6757812 L 12.439453 18.015625 L 14.244141 18.015625 L 15.175781 13.236328 C 16.644781 13.236328 17.252531 13.177844 17.519531 13.464844 C 17.796531 13.761844 17.654578 14.087625 16.892578 18.015625 L 18.722656 18.015625 C 19.514656 13.954625 19.864812 13.092922 19.132812 12.419922 C 18.435812 11.776922 16.991594 11.890625 15.433594 11.890625 L 15.863281 9.6757812 L 14.056641 9.6757812 z M 6.4882812 11.896484 L 4.8691406 20.242188 L 6.6855469 20.242188 L 7.1152344 18.025391 C 9.1482344 18.025391 10.411125 18.173078 11.578125 17.080078 C 12.869125 15.893078 13.206156 13.780656 12.285156 12.722656 C 11.805156 12.168656 11.032375 11.896484 9.984375 11.896484 L 6.4882812 11.896484 z M 20.679688 11.896484 L 19.058594 20.242188 L 20.878906 20.242188 L 21.308594 18.025391 C 23.445594 18.025391 24.628484 18.149078 25.771484 17.080078 C 27.062484 15.893078 27.399516 13.780656 26.478516 12.722656 C 25.998516 12.168656 25.225734 11.896484 24.177734 11.896484 L 20.679688 11.896484 z M 9.3359375 13.210938 C 10.470781 13.242906 11.120203 13.483203 10.845703 14.908203 C 10.454703 16.912203 9.0759062 16.705078 7.3789062 16.705078 L 8.0566406 13.212891 C 8.5266406 13.212891 8.9576562 13.200281 9.3359375 13.210938 z M 23.529297 13.210938 C 24.665547 13.242906 25.307703 13.483203 25.033203 14.908203 C 24.637203 16.941203 23.218406 16.705078 21.566406 16.705078 L 22.244141 13.212891 C 22.716641 13.212891 23.150547 13.200281 23.529297 13.210938 z"
            />
          </svg>
        </div>

        {/* Libraries and Frameworks */}
        <div className="flex justify-evenly mb-6">
          {/* React */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            fill="rgb(129 140 248)"
          >
            <circle cx="12" cy="11.245" r="1.785" />
            <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z" />
            <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z" />
            <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z" />
            <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z" />
          </svg>

          {/* Django */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            className="w-8 h-8"
            fill="rgb(129 140 248)"
          >
            <title>Django icon</title>
            <path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z" />
          </svg>

          {/* Laravel */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8"
            fill="rgb(129 140 248)"
          >
            <path d="M31.526 7.24c0.010 0.042 0.016 0.089 0.016 0.13v6.87c0 0.177-0.094 0.344-0.25 0.432l-5.766 3.323v6.578c0 0.177-0.094 0.344-0.25 0.432l-12.036 6.927c-0.026 0.016-0.057 0.026-0.089 0.036-0.010 0.005-0.021 0.010-0.031 0.016-0.083 0.021-0.172 0.021-0.255 0-0.016-0.005-0.026-0.010-0.036-0.016-0.031-0.010-0.057-0.021-0.083-0.036l-12.031-6.927c-0.156-0.089-0.255-0.255-0.255-0.432v-20.609c0-0.042 0.010-0.089 0.021-0.13 0.005-0.016 0.010-0.026 0.016-0.042 0.010-0.026 0.021-0.052 0.031-0.078 0.005-0.016 0.021-0.026 0.031-0.042 0.016-0.021 0.031-0.042 0.047-0.063 0.016-0.010 0.031-0.021 0.047-0.036 0.021-0.016 0.036-0.031 0.057-0.042l6.016-3.464c0.156-0.089 0.349-0.089 0.5 0l6.021 3.464c0.021 0.010 0.036 0.026 0.052 0.042 0.016 0.010 0.036 0.026 0.052 0.036 0.016 0.021 0.026 0.036 0.042 0.063 0.010 0.010 0.026 0.026 0.036 0.042 0.010 0.026 0.021 0.052 0.031 0.078 0.005 0.016 0.016 0.026 0.016 0.042 0.016 0.042 0.021 0.083 0.021 0.13v12.87l5.010-2.885v-6.578c0-0.047 0.010-0.089 0.021-0.13 0.005-0.016 0.010-0.031 0.016-0.042 0.010-0.026 0.021-0.052 0.031-0.078 0.010-0.021 0.026-0.031 0.036-0.047 0.016-0.021 0.026-0.042 0.042-0.057s0.036-0.026 0.052-0.036c0.016-0.016 0.031-0.031 0.052-0.042l6.021-3.464c0.151-0.094 0.344-0.094 0.5 0l6.016 3.464c0.021 0.010 0.036 0.026 0.057 0.042 0.016 0.010 0.031 0.021 0.047 0.036s0.031 0.036 0.047 0.057c0.010 0.016 0.026 0.026 0.031 0.047 0.016 0.026 0.021 0.052 0.031 0.078 0.010 0.010 0.016 0.026 0.021 0.042zM30.536 13.948v-5.708l-2.104 1.208-2.906 1.677v5.708zM24.526 24.281v-5.714l-2.865 1.63-8.167 4.667v5.766zM1.458 4.833v19.448l11.031 6.349v-5.766l-5.766-3.266c-0.021-0.010-0.036-0.026-0.052-0.042-0.016-0.010-0.036-0.021-0.047-0.036h-0.005c-0.016-0.016-0.026-0.036-0.042-0.052-0.010-0.016-0.026-0.031-0.036-0.052-0.010-0.016-0.021-0.042-0.026-0.063-0.010-0.021-0.021-0.036-0.026-0.057s-0.010-0.047-0.010-0.073c-0.005-0.021-0.010-0.036-0.010-0.057v-13.448l-2.906-1.677zM6.974 1.078l-5.010 2.885 5.010 2.885 5.010-2.885zM9.583 19.089l2.906-1.677v-12.578l-2.104 1.208-2.911 1.677v12.578zM25.026 4.484l-5.016 2.885 5.016 2.885 5.010-2.885zM24.526 11.125l-5.016-2.885v5.708l2.906 1.677 2.109 1.208zM12.99 23.995l11.026-6.292-5.005-2.885-11.021 6.344z" />
          </svg>
        </div>

        {/* Databases */}
        <div className="flex justify-evenly mb-6">
          {/* MySQL */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            className="w-10 h-10"
            fill="rgb(129 140 248)"
          >
            <title>MySQL icon</title>
            <path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zM23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
          </svg>

          {/* PostgreSQL */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-10 h-10"
          >
            <title>file_type_pgsql</title>
            <path d="M29.507,18.773a1.378,1.378,0,0,0-1.144-.921,2.619,2.619,0,0,0-.913.051,8.2,8.2,0,0,1-1.406.185,27.125,27.125,0,0,0,2.872-6.83c.953-3.689.444-5.369-.151-6.13A8.239,8.239,0,0,0,22.121,2a11.773,11.773,0,0,0-3.453.484A12.858,12.858,0,0,0,16.648,2.3a6.565,6.565,0,0,0-3.518.867,16.039,16.039,0,0,0-2.484-.624,7.694,7.694,0,0,0-5.819.924C3.093,4.691,2.289,6.819,2.438,9.792A36.351,36.351,0,0,0,3.844,16.33a22.579,22.579,0,0,0,1.514,3.863A4.786,4.786,0,0,0,7.8,22.742a2.4,2.4,0,0,0,2.379-.516,2.08,2.08,0,0,0,.5.43,3.328,3.328,0,0,0,.944.4,5.069,5.069,0,0,0,3.3-.2c.006.171.011.335.014.477.006.229.013.454.021.665a11.641,11.641,0,0,0,.441,3.3c.016.043.037.107.059.176a3.975,3.975,0,0,0,.991,1.745,2.955,2.955,0,0,0,2.09.777,4.7,4.7,0,0,0,.977-.109A4.592,4.592,0,0,0,22.607,28.1c.811-1.155,1.206-2.894,1.277-5.635.009-.078.018-.152.026-.222l.017-.145.191.017.049,0a7.562,7.562,0,0,0,3.163-.548c.631-.293,2.654-1.361,2.177-2.8" />
            <path
              d="M27.689,19.053c-3.163.652-3.38-.418-3.38-.418C27.648,13.68,29.044,7.39,27.839,5.851c-3.286-4.2-8.975-2.213-9.07-2.162l-.031.006a11.28,11.28,0,0,0-2.11-.22,5.212,5.212,0,0,0-3.34,1S3.14.294,3.612,9.733c.1,2.008,2.878,15.194,6.191,11.211,1.211-1.456,2.381-2.688,2.381-2.688a3.071,3.071,0,0,0,2.006.512l.057-.048a2.21,2.21,0,0,0,.023.567c-.854.954-.6,1.121-2.309,1.472-1.726.356-.712.989-.05,1.155a3.508,3.508,0,0,0,3.915-1.272l-.05.2c.334.268.569,1.742.53,3.079a8.481,8.481,0,0,0,.2,2.971c.264.717.526,2.329,2.769,1.849a3.307,3.307,0,0,0,2.98-3.179c.1-1.234.313-1.052.326-2.155l.174-.522c.2-1.673.032-2.213,1.186-1.962l.281.025a6.4,6.4,0,0,0,2.615-.44c1.406-.652,2.239-1.742.853-1.455h0"
              fill="rgb(129 140 248)"
            />
            <path
              d="M13.882,10.631a.981.981,0,0,0-.674.1.247.247,0,0,0-.1.164.48.48,0,0,0,.117.314.881.881,0,0,0,.559.349.637.637,0,0,0,.09.006.725.725,0,0,0,.687-.467c.035-.248-.326-.414-.676-.463m9.442.008c-.027-.195-.374-.25-.7-.2s-.647.194-.62.389a.667.667,0,0,0,.62.411.592.592,0,0,0,.083-.006.8.8,0,0,0,.451-.247.5.5,0,0,0,.169-.343"
              fill="rgb(129 140 248)"
            />
            <path
              d="M28.741,18.979c-.121-.365-.509-.482-1.154-.349-1.915.4-2.6.121-2.826-.044a26.327,26.327,0,0,0,3.373-7.565,14.374,14.374,0,0,0,.5-3.253,3.513,3.513,0,0,0-.509-2.2,7.482,7.482,0,0,0-6.049-2.825,10.363,10.363,0,0,0-3.5.551,8.717,8.717,0,0,0-1.968-.253,5.684,5.684,0,0,0-3.372.929,15.051,15.051,0,0,0-2.74-.718,6.978,6.978,0,0,0-5.242.805c-1.5,1.064-2.2,2.966-2.061,5.653a35.489,35.489,0,0,0,1.373,6.348c1.07,3.505,2.233,5.49,3.457,5.9a1.548,1.548,0,0,0,.491.081,2.049,2.049,0,0,0,1.563-.886q1.042-1.25,2.155-2.438a3.472,3.472,0,0,0,1.55.417l0,.042q-.14.166-.273.338c-.375.475-.452.574-1.658.823-.343.071-1.254.259-1.267.9-.014.7,1.077.991,1.2,1.022a5.144,5.144,0,0,0,1.249.162,3.634,3.634,0,0,0,2.5-.934,23.674,23.674,0,0,0,.381,5.684,2.854,2.854,0,0,0,2.729,2.1,4.378,4.378,0,0,0,.917-.1,3.462,3.462,0,0,0,3.156-3.212c.177-1.026.481-3.475.624-4.789a3.859,3.859,0,0,0,1.11.137,6.6,6.6,0,0,0,2.519-.48c.712-.331,2-1.141,1.763-1.846ZM24.051,10.1a7.968,7.968,0,0,1-.116,1.107,10.229,10.229,0,0,0-.14,1.3,9.859,9.859,0,0,0,.1,1.47,5.236,5.236,0,0,1-.229,2.986,3.882,3.882,0,0,1-.207-.426c-.058-.141-.185-.368-.359-.681-.68-1.22-2.274-4.078-1.458-5.244.243-.347.86-.7,2.408-.512ZM22.174,3.531a6.617,6.617,0,0,1,5.334,2.522c.975,1.245-.1,6.912-3.205,11.8l-.094-.119-.039-.049a5.524,5.524,0,0,0,.506-3.8,9.114,9.114,0,0,1-.1-1.352,9.572,9.572,0,0,1,.131-1.206,7.614,7.614,0,0,0,.123-1.493.619.619,0,0,0,.013-.21,8.381,8.381,0,0,0-1.912-3.6,8.61,8.61,0,0,0-3.039-2.284,10.246,10.246,0,0,1,2.28-.214ZM9.479,20.654c-.627.754-1.061.61-1.2.562-.928-.31-2.006-2.272-2.955-5.384a35.167,35.167,0,0,1-1.34-6.159c-.12-2.4.462-4.074,1.73-4.974,2.063-1.463,5.456-.587,6.819-.143-.02.019-.04.037-.059.057-2.237,2.259-2.184,6.119-2.178,6.355,0,.091.007.22.018.4a15.969,15.969,0,0,1-.081,3.226A4.08,4.08,0,0,0,11.3,18.007q.133.138.278.262c-.383.41-1.216,1.318-2.1,2.385Zm2.39-3.19a3.3,3.3,0,0,1-.865-2.764,16.7,16.7,0,0,0,.087-3.381c-.006-.095-.011-.178-.014-.243A4.3,4.3,0,0,1,14,10.223a1.188,1.188,0,0,1,.918,1.026c.646,2.989.085,4.234-.365,5.235-.093.206-.181.4-.255.6l-.058.156a10.218,10.218,0,0,0-.368,1.109,2.788,2.788,0,0,1-2-.887Zm.113,4.03a1.733,1.733,0,0,1-.523-.225,2.553,2.553,0,0,1,.557-.166c1.418-.292,1.637-.5,2.116-1.105.11-.139.234-.3.406-.489h0c.256-.287.374-.238.586-.15a.829.829,0,0,1,.408.525.585.585,0,0,1-.05.491A3.1,3.1,0,0,1,11.983,21.495ZM19.406,28.4a2.113,2.113,0,0,1-2.754-1.526,31.129,31.129,0,0,1-.3-6.853.392.392,0,0,0-.017-.124,1.643,1.643,0,0,0-.048-.23,1.589,1.589,0,0,0-.862-1.034,1.216,1.216,0,0,0-.793-.1,9.586,9.586,0,0,1,.342-1.022l.058-.157c.066-.177.148-.36.235-.554.471-1.047,1.117-2.482.416-5.722a2.044,2.044,0,0,0-2.468-1.669A5.694,5.694,0,0,0,11.328,10c-.078.04-.15.078-.216.115A8.244,8.244,0,0,1,13.03,5.163,4.711,4.711,0,0,1,16.6,3.827,7.567,7.567,0,0,1,22.381,6.59,8.774,8.774,0,0,1,23.963,9.3c-1.463-.149-2.458.14-2.962.861-1.1,1.568.6,4.612,1.416,6.075.15.268.279.5.319.6a5.432,5.432,0,0,0,.861,1.387c.077.1.152.189.208.271-.443.128-1.239.423-1.166,1.9-.058.74-.474,4.205-.686,5.43-.279,1.617-.874,2.22-2.548,2.579Zm7.242-8.288a5.714,5.714,0,0,1-1.931.4,2.422,2.422,0,0,1-1.3-.167c-.045-.919.3-1.015.66-1.117.057-.016.112-.032.166-.05a1.353,1.353,0,0,0,.11.08c.639.422,1.78.467,3.39.135l.018,0a4.334,4.334,0,0,1-1.116.72Z"
              fill="rgb(204 214 246)"
            />
          </svg>

          {/* Firebase */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-47.5 0 351 351"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            className="w-10 h-10"
          >
            <defs>
              <path
                d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z"
                id="path-1"
              />
              <filter
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
                id="filter-2"
              >
                <feGaussianBlur
                  stdDeviation="17.5"
                  in="SourceAlpha"
                  result="shadowBlurInner1"
                />
                <feOffset
                  dx="0"
                  dy="0"
                  in="shadowBlurInner1"
                  result="shadowOffsetInner1"
                />
                <feComposite
                  in="shadowOffsetInner1"
                  in2="SourceAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                  result="shadowInnerInner1"
                />
                <feColorMatrix
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
                  type="matrix"
                  in="shadowInnerInner1"
                />
              </filter>
              <path
                d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z"
                id="path-3"
              />
              <filter
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
                id="filter-4"
              >
                <feGaussianBlur
                  stdDeviation="3.5"
                  in="SourceAlpha"
                  result="shadowBlurInner1"
                />
                <feOffset
                  dx="1"
                  dy="-9"
                  in="shadowBlurInner1"
                  result="shadowOffsetInner1"
                />
                <feComposite
                  in="shadowOffsetInner1"
                  in2="SourceAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                  result="shadowInnerInner1"
                />
                <feColorMatrix
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0"
                  type="matrix"
                  in="shadowInnerInner1"
                />
              </filter>
            </defs>
            <g>
              <path
                d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z"
                fill="rgb(99 102 241)"
              />
              <g>
                <use fill="rgb(165 180 252)" fill-rule="evenodd" />
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" />
              </g>
              <path
                d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z"
                fill="rgb(99 102 241)"
              />
              <g>
                <use fill="rgb(165 180 252)" fill-rule="evenodd" />
                <use fill="black" fill-opacity="1" filter="url(#filter-4)" />
              </g>
              <polygon
                fill="rgb(79 70 229)"
                points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"
              />
              <path
                d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268"
                fill="rgb(165 180 252)"
              />
              <path
                d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z"
                fill="rgb(129 140 248)"
              />
              <path
                d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z"
                fill="rgb(165 180 252)"
              />
            </g>
          </svg>
        </div>
        <div className="flex justify-center items-center">
          <a
            className="text-indigo-400 
        bg-transparent border border-solid
        border-indigo-400 rounded py-5 
        px-7 text-sm font-sans leading-none 
        no-underline cursor-pointer mt-12
         hover:bg-indigo-300/40"
            href="mailto:wellington.abreu@gmail.com"
          >
            Say hello!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
