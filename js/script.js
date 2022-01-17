
const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}

console.log(document.getElementById("Searchbar"))

function keyup() {
    if (document.getElementById("Searchbar").value == "") {
        test = document.getElementById("Searchbar").value;
        var url = "https://backend.deviantart.com/rss.xml?type=deviation&q=rainmeter&tag=rainmeter";
        document.getElementById("Searchbar").value = test;
    } else {
        test = document.getElementById("Searchbar").value;
        var url = "https://backend.deviantart.com/rss.xml?type=deviation&q=rainmeter%20"+document.getElementById("Searchbar").value+"&tag=rainmeter";
        document.getElementById("Searchbar").value = test;
        console.log(url)
    }
    
    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", clearInput);
    
    fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            let parser = new DOMParser(),
                XMLDoc = parser.parseFromString(data, "text/xml");
            // item1 = XMLDoc.getElementsByTagName("item")[0];
            // console.log(item1.getElementsByTagName("title")[0].innerHTML);
            // document.getElementById("testingapi").src = XMLDoc.getElementsByTagName("media:content")[0].getAttribute("url");
            // item2 = XMLDoc.getElementsByTagName("item")[1];
            // console.log(item2.getElementsByTagName("title")[0].innerHTML);
            // document.getElementById("testingapi2").src = XMLDoc.getElementsByTagName("media:content")[1].getAttribute("url");
            if (document.getElementById("Searchbar").value == "") {
                document.getElementById("Searchquery").innerHTML = "";
            } else {
                document.getElementById("Searchquery").innerHTML = '"'+document.getElementById("Searchbar").value+'"';
            }
            document.getElementById("APIimg").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[1].getAttribute("url")+"')";
            document.getElementById("APIimg1").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[4].getAttribute("url")+"')";
            document.getElementById("APIimg2").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[7].getAttribute("url")+"')";
            document.getElementById("APIimg3").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[10].getAttribute("url")+"')";
            document.getElementById("APIimg4").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[13].getAttribute("url")+"')";
            document.getElementById("APIimg5").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[16].getAttribute("url")+"')";
            document.getElementById("APIimg6").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[19].getAttribute("url")+"')";
            document.getElementById("APIimg7").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[22].getAttribute("url")+"')";
            document.getElementById("APIimg8").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[25].getAttribute("url")+"')";
            document.getElementById("APIimg9").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[28].getAttribute("url")+"')";
            document.getElementById("APIimg10").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[31].getAttribute("url")+"')";
            document.getElementById("APIimg11").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[34].getAttribute("url")+"')";
            document.getElementById("APIimg12").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[37].getAttribute("url")+"')";
            document.getElementById("APIimg13").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[40].getAttribute("url")+"')";
            document.getElementById("APIimg14").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[43].getAttribute("url")+"')";
            document.getElementById("APIimg15").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[46].getAttribute("url")+"')";
            document.getElementById("APIimg16").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[49].getAttribute("url")+"')";
            document.getElementById("APIimg17").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[52].getAttribute("url")+"')";
            document.getElementById("APIimg18").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[55].getAttribute("url")+"')";
            document.getElementById("APIimg19").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[58].getAttribute("url")+"')";
            document.getElementById("APIimg20").style.backgroundImage = "url('"+XMLDoc.getElementsByTagName("media:thumbnail")[61].getAttribute("url")+"')";
            // API Links
            // document.getElementById("APIlink").href = XMLDoc.getElementsByTagName("link")[0].innerHTML;
            // document.getElementById("APIlink1").href = XMLDoc.getElementsByTagName("link")[1].innerHTML;
            // document.getElementById("APIlink2").href = XMLDoc.getElementsByTagName("link")[2].innerHTML;
            // document.getElementById("APIlink3").href = XMLDoc.getElementsByTagName("link")[3].innerHTML;
            // document.getElementById("APIlink4").href = XMLDoc.getElementsByTagName("link")[4].innerHTML;
            // document.getElementById("APIlink5").href = XMLDoc.getElementsByTagName("link")[5].innerHTML;
            // document.getElementById("APIlink6").href = XMLDoc.getElementsByTagName("link")[6].innerHTML;
            // document.getElementById("APIlink7").href = XMLDoc.getElementsByTagName("link")[7].innerHTML;
            // document.getElementById("APIlink8").href = XMLDoc.getElementsByTagName("link")[8].innerHTML;
            // document.getElementById("APIlink9").href = XMLDoc.getElementsByTagName("link")[9].innerHTML;
            // document.getElementById("APIlink10").href = XMLDoc.getElementsByTagName("link")[10].innerHTML;
            // document.getElementById("APIlink11").href = XMLDoc.getElementsByTagName("link")[11].innerHTML;
            // document.getElementById("APIlink12").href = XMLDoc.getElementsByTagName("link")[12].innerHTML;
            // document.getElementById("APIlink13").href = XMLDoc.getElementsByTagName("link")[13].innerHTML;
            // document.getElementById("APIlink14").href = XMLDoc.getElementsByTagName("link")[14].innerHTML;
            // document.getElementById("APIlink15").href = XMLDoc.getElementsByTagName("link")[15].innerHTML;
            // document.getElementById("APIlink16").href = XMLDoc.getElementsByTagName("link")[16].innerHTML;
            // document.getElementById("APIlink17").href = XMLDoc.getElementsByTagName("link")[17].innerHTML;
            // document.getElementById("APIlink18").href = XMLDoc.getElementsByTagName("link")[18].innerHTML;
            // document.getElementById("APIlink19").href = XMLDoc.getElementsByTagName("link")[19].innerHTML;
            // document.getElementById("APIlink20").href = XMLDoc.getElementsByTagName("link")[20].innerHTML;
        })
}

function clearSearch() {
    document.getElementById("Searchbar").value = "";
    keyup();
}

keyup();