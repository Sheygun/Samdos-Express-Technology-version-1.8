let clickme = document.getElementById('clickme');

clickme.onclick = function(){
    let selectItem = document.getElementById('selectObj').value;
    if(selectItem != "faculty"){
        document.getElementById('selectObj2').style.visibility = "visible";
        if(selectItem == "science"){
           document.getElementById('checkName').innerHTML = "Check Department";
           let selectDept = document.getElementById('selectObj2').value;

            document.getElementById('one').innerHTML = "Computer Science";
                let valueOne = document.getElementById('one').value = "computer";

                    if(selectDept == valueOne){
                        document.getElementById('selectObj3').style.visibility = "visible";
                        document.getElementById('checkName').innerHTML = "Select Level";
                            let selectLevel = document.getElementById('selectObj3').value;

                            if(selectLevel == "100"){
                                document.getElementById('selectObj4').style.visibility = "visible";
                                 document.getElementById('checkName').innerHTML = "Check Course";
                                 let selectCourse = document.getElementById('selectObj4').value;

                                    document.getElementById('course1').innerHTML = "CSC101";
                                    let course1 = document.getElementById('course1').value = "csc101";

                                    if(selectCourse == course1){
                                        window.location.replace('/pq');
                                    }

                                    document.getElementById('course2').innerHTML = "CSC101";
                                    document.getElementById('course3').innerHTML = "CSC102";
                                    document.getElementById('course4').innerHTML = "CSC103";
                                    document.getElementById('course5').innerHTML = "CSC104";
                                    document.getElementById('course6').innerHTML = "CSC105";
                                    document.getElementById('course7').innerHTML = "CSC106";
                                    document.getElementById('course8').innerHTML = "CSC107";
                                    document.getElementById('course9').innerHTML = "CSC108";
                                    document.getElementById('course10').innerHTML = "CSC109";
                                    document.getElementById('course11').innerHTML = "CSC111";
                                    document.getElementById('course12').innerHTML = "CSC120";


                            }else{
                                document.getElementById('selectObj4').style.visibility = "hidden";
                                 document.getElementById('checkName').innerHTML = "Select Level";
                            }
                    }else {
                        document.getElementById('selectObj3').style.visibility = "hidden";
                        document.getElementById('selectObj4').style.visibility = "hidden";
                        document.getElementById('checkName').innerHTML = "Check Department";
                    }


            document.getElementById('two').innerHTML = "Mathematics";
            document.getElementById('three').innerHTML = "Biochemistry";
            document.getElementById('four').innerHTML = "Physics";
            document.getElementById('five').innerHTML = "Zoology";
            document.getElementById('six').innerHTML = "Botany";
            document.getElementById('seven').innerHTML = "Fishery";
            document.getElementById('eight').innerHTML = "Microbiology";
            document.getElementById('nine').innerHTML = "Chemistry";



        }else if(selectItem == "art"){
            document.getElementById('checkName').innerHTML = "Check Department";

            document.getElementById('one').innerHTML = "Music and Art";
            document.getElementById('two').innerHTML = "English Language";
            document.getElementById('three').innerHTML = "Foreign Language";
            document.getElementById('four').innerHTML = "Philisopy";
            document.getElementById('five').innerHTML = "Religion";
            document.getElementById('six').innerHTML = "History";
            var child = document.getElementById("seven"); child.parentNode.removeChild(child);
            var child2 = document.getElementById("eight"); child2.parentNode.removeChild(child2);
            var child3 = document.getElementById("nine"); child3.parentNode.removeChild(child3);
        }
    }else {
        document.getElementById('selectObj4').style.visibility ="hidden";
        document.getElementById('selectObj3').style.visibility ="hidden";
        document.getElementById('selectObj2').style.visibility ="hidden";
        document.getElementById('checkName').innerHTML = "Check Faculty";
    }
}