
class Music{

    constructor(name,singer,img,file){
        this.name=name;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }
    getName(){
        return `${this.name}`;
    }
}


var musicList=[
    new Music("Geceler Yangın Virane","Kıvırcık Ali","1.jpg","1.mp3"),
    new Music("Felek","Kıvırcık Ali","2.jpg","2.mp3"),
    new Music("Kim Ağlasın","Kıvırcık Ali","3.jpg","3.mp3"),
]