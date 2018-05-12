import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {GenericElementRef} from '../../../shared/common.types';
import {Photo} from '../photo-card.component';

@Component({
  selector: 'photo-maker',
  templateUrl: './photo-maker.component.html',
  styleUrls: ['./photo-maker.component.css']
})
export class PhotoMakerComponent implements OnInit {

  @ViewChild('video') video: GenericElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: GenericElementRef<HTMLCanvasElement>;

  @Output() addNewPhoto: EventEmitter<Photo> = new EventEmitter<Photo>();

  devices: Array<MediaDeviceInfo> = [];
  private nextDeviceIndex: number;

  //todo put it into gallery
  images: Array<Photo> = [];
  isCameraOn = false;

  startCamera(): void {
    this.initCamera();
    this.isCameraOn = true;
  }

  stopCamera(): void {
    this.video.nativeElement.srcObject.getTracks().forEach(function(track) {
      track.stop();
    });
    this.isCameraOn = false;
  }

  capturePhoto(): void {
    const canvas = this.canvas.nativeElement;
    const video = this.video.nativeElement;
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    canvas.getContext('2d').drawImage(video, 0, 0);

    this.addNewPhoto.emit({
      src: canvas.toDataURL(),
      fileName: 'initialName'
    } as Photo);
  }

  switchCamera(): void {
    this.stopCamera();
    this.incrementNextDeviceIndex();
    this.startCamera();
  }

  initCamera(): void {

    const video: MediaTrackConstraints = {
      deviceId: this.devices[this.nextDeviceIndex].deviceId
    };

    const config: MediaStreamConstraints = {
      video: video
    };

    navigator.mediaDevices.getUserMedia(config).then((stream: MediaStream) => {
      this.video.nativeElement.srcObject = stream;
      this.video.nativeElement.height = 280;
      this.video.nativeElement.width = 360;
      this.video.nativeElement.play();
    });
  }

  ngOnInit() {
    this.collectCameraDevices();
  }

  private collectCameraDevices() {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      devices.forEach((device: MediaDeviceInfo) => {
        if (device.kind === 'videoinput') {
          this.devices.push(device);
        }
      });
      if (this.devices) {
        this.nextDeviceIndex = 0;
      }
    });
  }

  private incrementNextDeviceIndex() {
    this.nextDeviceIndex++;
    if (this.nextDeviceIndex === this.devices.length) {
      this.nextDeviceIndex = 0;
    }
  }
}
