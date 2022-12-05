"use strict";

// window.addEventListener("load", HomeAnimations)

function HomeAnimations() {

    let playAnims = true

    if(playAnims){

        /**
         * Add animation to infoTiles
         */

            const infoTiles = document.getElementsByClassName("infoTile")
            let duration = 5.3;
            let increment = 0.2;

            for(let i = 0; i < infoTiles.length; i++) {

                // infoTiles[i].classList.add("infoTile_animation")

                infoTiles[i].style.animation = "infoTile_load " + duration + "s " + "forwards";
                duration = duration + increment

                // console.log("InfoTiles anim: ", infoTiles[i].style.animation)

            }

        /**
         * Add animation to icon_container
         */

            const iconContainer = document.querySelector(".icon-container") 
            iconContainer.classList.add("icon-container-animation")

        /**
         * Add animation to neu circle in cirlce
         */

            const neuCircleInCircle = document.getElementsByClassName("neu-circle-in-circle")[0]
            neuCircleInCircle.classList.add("neu-circle-anim")

            // console.log("Neu circle in circle: ", neuCircleInCircle.classList)

        /**
        * Add animation to extruded profile image
        */

            const profileImage = document.getElementsByClassName("neu-profile-pic")[0]
            profileImage.classList.add("neu-profile-pic-anim")
        
            //  console.log("Profile Image: ", profileImage.classList)

        /**
        * Add animation to embedded neu circle
        */

            const embeddedProfileNeu = document.getElementsByClassName("profile-pic-area")[0]
            // embeddedProfileNeu.classList.add("profile-pic-area-animation")

            // console.log("embedded Profile Neu : ", embeddedProfileNeu.classList)

        /**
        * Add animation to CTAs
        */

            const CTA_array = document.getElementsByClassName("CTA")

            CTA_array[0].classList.add("CTA_one_animation")
            CTA_array[1].classList.add("CTA_two_animation")

            // console.log("CTA array: ", CTA_array)

    }
}

setTimeout(HomeAnimations, 100)
